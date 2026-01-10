const Dashboard = () => {
    return (
        <div className="page">
            <div className="page-header">
                <div>
                    <h1>Dashboard</h1>
                    <p>Security posture, recent activity, and scanner status at a glance.</p>
                </div>
                <button type="button" className="button primary">Run Quick Scan</button>
            </div>
            <div className="card-grid">
                <div className="card">
                    <div className="card-header">
                        <h3>Security Posture</h3>
                        <span className="pill success">85% Secure</span>
                    </div>
                    <div className="gauge" style={{ '--value': '85' }}>
                        <div className="gauge-center">
                            <div className="gauge-value">85%</div>
                            <div className="gauge-label">Good</div>
                        </div>
                    </div>
                    <p className="card-note">2 hardening rules pending.</p>
                </div>
                <div className="card">
                    <div className="card-header">
                        <h3>Recent Activity</h3>
                        <span className="pill warning">7 days</span>
                    </div>
                    <div className="spark-bars" aria-hidden="true">
                        <span style={{ height: '35%' }} />
                        <span style={{ height: '48%' }} />
                        <span style={{ height: '62%' }} />
                        <span style={{ height: '28%' }} />
                        <span style={{ height: '80%' }} />
                        <span style={{ height: '54%' }} />
                        <span style={{ height: '42%' }} />
                    </div>
                    <p className="card-note">34 blocked attacks, trending down.</p>
                </div>
                <div className="card">
                    <div className="card-header">
                        <h3>Scanner Status</h3>
                        <span className="pill success">Healthy</span>
                    </div>
                    <div className="status-row">
                        <span className="status-dot success" aria-hidden="true" />
                        <div>
                            <div className="status-title">All clear</div>
                            <div className="status-subtitle">Last scan: 2 hours ago</div>
                        </div>
                    </div>
                    <p className="card-note">0 issues found.</p>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
