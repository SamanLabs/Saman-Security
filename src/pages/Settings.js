const Settings = () => {
    return (
        <div className="page">
            <div className="page-header">
                <div>
                    <h1>Settings</h1>
                    <p>Manage notifications, API keys, and global preferences.</p>
                </div>
                <button type="button" className="button ghost">Reset Defaults</button>
            </div>
            <div className="page-body two-column">
                <section className="panel">
                    <h3>Notifications</h3>
                    <div className="settings-row compact">
                        <div className="settings-label">
                            <label htmlFor="email-alerts">Email Alerts</label>
                            <p className="settings-help">Send critical alerts to the site owner.</p>
                        </div>
                        <div className="settings-control">
                            <label className="toggle">
                                <input id="email-alerts" type="checkbox" defaultChecked />
                                <span className="toggle-track" />
                                <span className="toggle-text">Enabled</span>
                            </label>
                        </div>
                    </div>
                    <div className="settings-row compact">
                        <div className="settings-label">
                            <label htmlFor="summary-reports">Weekly Summary</label>
                            <p className="settings-help">Receive a digest of security events.</p>
                        </div>
                        <div className="settings-control">
                            <label className="toggle">
                                <input id="summary-reports" type="checkbox" />
                                <span className="toggle-track" />
                                <span className="toggle-text">Disabled</span>
                            </label>
                        </div>
                    </div>
                </section>
                <aside className="side-panel">
                    <div className="side-card">
                        <h3>API Keys</h3>
                        <p className="muted">Generate a key to connect external dashboards.</p>
                        <button type="button" className="button primary">Generate Key</button>
                        <div className="key-preview">
                            <span className="muted">Key:</span>
                            <span className="code">wpsp_live_3fd1...d2</span>
                        </div>
                    </div>
                    <div className="side-card highlight">
                        <h3>Integrations</h3>
                        <p className="muted">Connect Slack, webhooks, and custom endpoints.</p>
                        <button type="button" className="button ghost">Add Integration</button>
                    </div>
                </aside>
            </div>
        </div>
    );
};

export default Settings;
