import React, { useState } from 'react';
import {
    LayoutDashboard,
    ShoppingBag,
    Users,
    TrendingUp,
    BarChart3,
    Settings,
    LogOut,
    Search,
    Bell,
    Menu,
    X,
    ArrowUpRight,
    ArrowDownRight,
    MoreVertical
} from 'lucide-react';
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    PieChart,
    Pie,
    Cell
} from 'recharts';
import { motion, AnimatePresence } from 'framer-motion';
import '../dashboard.css';

const data = [
    { name: 'Mon', revenue: 4000, orders: 240 },
    { name: 'Tue', revenue: 3000, orders: 198 },
    { name: 'Wed', revenue: 5000, orders: 300 },
    { name: 'Thu', revenue: 2780, orders: 190 },
    { name: 'Fri', revenue: 6890, orders: 480 },
    { name: 'Sat', revenue: 8390, orders: 520 },
    { name: 'Sun', revenue: 7490, orders: 490 },
];

const pieData = [
    { name: 'Skin Care', value: 400 },
    { name: 'Hair Care', value: 300 },
    { name: 'Vitamins', value: 300 },
    { name: 'Orthopedics', value: 200 },
];

const COLORS = ['#478240', '#5a9e51', '#74c469', '#a1d69a'];

const DashboardPage = ({ theme, toggleTheme }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [showMobileSidebar, setShowMobileSidebar] = useState(false);

    const stats = [
        { title: 'Total Revenue', value: '$24,560', change: '+12.5%', trend: 'up', icon: TrendingUp },
        { title: 'Active Orders', value: '456', change: '+5.2%', trend: 'up', icon: ShoppingBag },
        { title: 'New Customers', value: '1,240', change: '-2.4%', trend: 'down', icon: Users },
        { title: 'Avg. Order', value: '$85.20', change: '+8.1%', trend: 'up', icon: BarChart3 },
    ];

    return (
        <div className={`dashboard-layout ${theme}`}>
            {/* Mobile Sidebar Overlay */}
            <AnimatePresence>
                {showMobileSidebar && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setShowMobileSidebar(false)}
                        className="mobile-overlay"
                    />
                )}
            </AnimatePresence>

            {/* Sidebar */}
            <aside className={`dashboard-sidebar ${isSidebarOpen ? 'open' : 'closed'} ${showMobileSidebar ? 'mobile-show' : ''}`}>
                <div className="sidebar-header">
                    <div className="sidebar-logo">
                        <TrendingUp className="logo-icon" />
                        <span>ParaHealth</span>
                    </div>
                    <button className="sidebar-toggle desktop-only" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                        {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                    <button className="sidebar-toggle mobile-only" onClick={() => setShowMobileSidebar(false)}>
                        <X size={20} />
                    </button>
                </div>

                <nav className="sidebar-nav">
                    <a href="/dashboard" className="nav-item active">
                        <LayoutDashboard size={20} />
                        <span>Overview</span>
                    </a>
                    <a href="#" className="nav-item">
                        <ShoppingBag size={20} />
                        <span>Orders</span>
                    </a>
                    <a href="#" className="nav-item">
                        <Users size={20} />
                        <span>Customers</span>
                    </a>
                    <a href="#" className="nav-item">
                        <BarChart3 size={20} />
                        <span>Analytics</span>
                    </a>
                    <div className="nav-divider"></div>
                    <a href="#" className="nav-item">
                        <Settings size={20} />
                        <span>Settings</span>
                    </a>
                    <button onClick={toggleTheme} className="nav-item theme-toggle-btn">
                        <span className="theme-text">{theme === 'dark' ? '☀️ Light' : '🌙 Dark'}</span>
                    </button>
                    <a href="/" className="nav-item logout">
                        <LogOut size={20} />
                        <span>Back to Store</span>
                    </a>
                </nav>
            </aside>

            {/* Main Content */}
            <main className="dashboard-main">
                {/* Header */}
                <header className="dashboard-header">
                    <div className="header-left">
                        <button className="mobile-menu-btn" onClick={() => setShowMobileSidebar(true)}>
                            <Menu size={24} />
                        </button>
                        <div className="header-search">
                            <Search size={18} className="search-icon" />
                            <input type="text" placeholder="Search analytics..." />
                        </div>
                    </div>
                    <div className="header-actions">
                        <button className="icon-btn">
                            <Bell size={20} />
                            <span className="badge"></span>
                        </button>
                        <div className="user-profile">
                            <img src="https://i.pinimg.com/736x/40/49/00/4049000d4675fcc0f78d3cdb868303e6.jpg" alt="User" />
                            <div className="user-info">
                                <span className="user-name">Alex Smith</span>
                                <span className="user-role">Administrator</span>
                            </div>
                        </div>
                    </div>
                </header>

                <div className="dashboard-content">
                    <div className="content-header">
                        <h1 className="page-title">Dashboard Overview</h1>
                        <p className="page-subtitle">Welcome back! Here's what's happening today.</p>
                    </div>

                    {/* Stats Grid */}
                    <div className="stats-grid">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="stat-card"
                            >
                                <div className="stat-icon-wrapper">
                                    <stat.icon className="stat-icon" />
                                </div>
                                <div className="stat-info">
                                    <span className="stat-title">{stat.title}</span>
                                    <div className="stat-value-row">
                                        <span className="stat-value">{stat.value}</span>
                                        <span className={`stat-change ${stat.trend}`}>
                                            {stat.trend === 'up' ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
                                            {stat.change}
                                        </span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Charts Row */}
                    <div className="charts-grid">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="chart-card area-chart"
                        >
                            <div className="chart-header">
                                <h3>Revenue Growth</h3>
                                <button className="icon-btn"><MoreVertical size={18} /></button>
                            </div>
                            <div className="chart-wrapper">
                                <ResponsiveContainer width="100%" height={300}>
                                    <AreaChart data={data}>
                                        <defs>
                                            <linearGradient id="colorRev" x1="0" y1="0" x2="0" y2="1">
                                                <stop offset="5%" stopColor="#478240" stopOpacity={0.3} />
                                                <stop offset="95%" stopColor="#478240" stopOpacity={0} />
                                            </linearGradient>
                                        </defs>
                                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke={theme === 'dark' ? '#333' : '#eee'} />
                                        <XAxis
                                            dataKey="name"
                                            axisLine={false}
                                            tickLine={false}
                                            tick={{ fill: theme === 'dark' ? '#888' : '#666', fontSize: 12 }}
                                        />
                                        <YAxis
                                            axisLine={false}
                                            tickLine={false}
                                            tick={{ fill: theme === 'dark' ? '#888' : '#666', fontSize: 12 }}
                                        />
                                        <Tooltip
                                            contentStyle={{
                                                backgroundColor: theme === 'dark' ? '#1a1a1a' : '#fff',
                                                border: 'none',
                                                borderRadius: '12px',
                                                boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                                                color: theme === 'dark' ? '#fff' : '#000'
                                            }}
                                        />
                                        <Area
                                            type="monotone"
                                            dataKey="revenue"
                                            stroke="#478240"
                                            strokeWidth={3}
                                            fillOpacity={1}
                                            fill="url(#colorRev)"
                                        />
                                    </AreaChart>
                                </ResponsiveContainer>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="chart-card pie-chart"
                        >
                            <div className="chart-header">
                                <h3>Sales by Category</h3>
                                <button className="icon-btn"><MoreVertical size={18} /></button>
                            </div>
                            <div className="chart-wrapper">
                                <ResponsiveContainer width="100%" height={300}>
                                    <PieChart>
                                        <Pie
                                            data={pieData}
                                            innerRadius={60}
                                            outerRadius={80}
                                            paddingAngle={5}
                                            dataKey="value"
                                        >
                                            {pieData.map((entry, index) => (
                                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                            ))}
                                        </Pie>
                                        <Tooltip />
                                    </PieChart>
                                </ResponsiveContainer>
                                <div className="pie-legend">
                                    {pieData.map((entry, index) => (
                                        <div key={index} className="legend-item">
                                            <span className="dot" style={{ backgroundColor: COLORS[index] }}></span>
                                            <span className="label">{entry.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Recent Activity Table */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="table-card"
                    >
                        <div className="table-header">
                            <h3>Recent Transactions</h3>
                            <button className="text-btn">View All</button>
                        </div>
                        <div className="table-responsive">
                            <table className="dashboard-table">
                                <thead>
                                    <tr>
                                        <th>Order ID</th>
                                        <th>Customer</th>
                                        <th>Date</th>
                                        <th>Status</th>
                                        <th>Amount</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[
                                        { id: '#12045', customer: 'John Doe', date: 'Oct 24, 2023', status: 'Completed', amount: '$120.50' },
                                        { id: '#12044', customer: 'Sarah Connor', date: 'Oct 23, 2023', status: 'Pending', amount: '$45.00' },
                                        { id: '#12043', customer: 'Mike Ross', date: 'Oct 22, 2023', status: 'Processing', amount: '$89.20' },
                                        { id: '#12042', customer: 'Jessica Pearson', date: 'Oct 21, 2023', status: 'Completed', amount: '$310.00' },
                                    ].map((row, i) => (
                                        <tr key={i}>
                                            <td className="font-medium">{row.id}</td>
                                            <td>{row.customer}</td>
                                            <td>{row.date}</td>
                                            <td>
                                                <span className={`status-badge ${row.status.toLowerCase()}`}>
                                                    {row.status}
                                                </span>
                                            </td>
                                            <td className="font-bold">{row.amount}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </motion.div>
                </div>
            </main>
        </div>
    );
};

export default DashboardPage;
