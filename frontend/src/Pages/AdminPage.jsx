import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AdminDashboard from '../Components/AdminDashboard';

const apiUrl = import.meta.env.VITE_API_BASE_URL;
// console.log(apiUrl)

const AdminPage = () => {
	const navigate = useNavigate();
	const [isAdmin, setIsAdmin] = useState(null); // 🔹 null initially to avoid flashing effect

	useEffect(() => {
		const checkAdminStatus = async () => {
			try {
				const token = localStorage.getItem('token');

				const response = await fetch(
					`${apiUrl}/auth/isAdmin`
					// 'http://localhost:5000/api/auth/isAdmin'
					, {
						method: 'GET',
						headers: {
							'Content-Type': 'application/json',
							Authorization: `Bearer ${token}`,
						},
					});

				const data = await response.json();
				console.log('Admin Check Response:', data);

				if (data.success && data.isAdmin) {
					setIsAdmin(true);
				} else {
					navigate('/login');
				}
			} catch (error) {
				console.error('Error checking admin status:', error);
				navigate('/login');
			}
		};

		checkAdminStatus();
	}, [navigate]); // 🔹 Added navigate as dependency

	if (isAdmin === null) {
		return <div>Loading...</div>; // 🔹 Prevents flashing before the check is complete
	}

	return <AdminDashboard />;
};

export default AdminPage;
