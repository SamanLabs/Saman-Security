const ActivityLog = () => {
    return (
        <div className="page">
            <div className="page-header">
                <div>
                    <h1>Activity Log</h1>
                    <p>Review recent security events and administrative actions.</p>
                </div>
                <button type="button" className="button ghost">Export Logs</button>
            </div>
            <section className="panel">
                <div className="table-toolbar">
                    <div>
                        <h3>Recent Events</h3>
                        <p className="muted">Latest 24 hours</p>
                    </div>
                    <div className="inline-form">
                        <input type="text" placeholder="Filter by user or IP" />
                        <button type="button" className="button">Apply Filter</button>
                    </div>
                </div>
                <table className="data-table">
                    <thead>
                        <tr>
                            <th>Event</th>
                            <th>User</th>
                            <th>IP</th>
                            <th>Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><span className="pill danger">Blocked</span> Brute force attempt</td>
                            <td>Unknown</td>
                            <td>41.204.90.12</td>
                            <td>Today, 08:52</td>
                        </tr>
                        <tr>
                            <td><span className="pill warning">Alert</span> New admin user created</td>
                            <td>jdenis</td>
                            <td>173.22.30.11</td>
                            <td>Today, 07:30</td>
                        </tr>
                        <tr>
                            <td><span className="pill success">Allowed</span> Firewall rule updated</td>
                            <td>jdenis</td>
                            <td>173.22.30.11</td>
                            <td>Yesterday, 21:18</td>
                        </tr>
                    </tbody>
                </table>
            </section>
        </div>
    );
};

export default ActivityLog;
