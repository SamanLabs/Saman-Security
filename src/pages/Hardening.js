import SubTabs from '../components/SubTabs';
import useUrlTab from '../hooks/useUrlTab';

const hardeningTabs = [
    { id: 'general', label: 'General Hardening' },
    { id: 'rest', label: 'REST API' },
    { id: 'passwords', label: 'Password Policy' },
    { id: 'export', label: 'Export Config' },
];

const Hardening = () => {
    const [activeTab, setActiveTab] = useUrlTab({ tabs: hardeningTabs, defaultTab: 'general' });

    return (
        <div className="page">
            <div className="page-header">
                <div>
                    <h1>Hardening</h1>
                    <p>Lock down core WordPress settings and enforce best practices.</p>
                </div>
                <button type="button" className="button ghost">View Recommendations</button>
            </div>

            <SubTabs tabs={hardeningTabs} activeTab={activeTab} onChange={setActiveTab} ariaLabel="Hardening sections" />

            <div className="page-body two-column">
                <section className="panel">
                    {activeTab === 'general' ? (
                        <form className="settings-form">
                            <div className="settings-row">
                                <div className="settings-label">
                                    <label htmlFor="xmlrpc">XML-RPC Access</label>
                                    <p className="settings-help">Control legacy XML-RPC endpoints and pingbacks.</p>
                                </div>
                                <div className="settings-control">
                                    <div className="radio-group">
                                        <label>
                                            <input type="radio" name="xmlrpc" defaultChecked />
                                            Disable completely
                                        </label>
                                        <label>
                                            <input type="radio" name="xmlrpc" />
                                            Disable pingbacks only
                                        </label>
                                        <label>
                                            <input type="radio" name="xmlrpc" />
                                            Allow all
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <div className="settings-row">
                                <div className="settings-label">
                                    <label htmlFor="file-editor">File Editor in Admin</label>
                                    <p className="settings-help">Disables the Theme/Plugin file editor to prevent code injection.</p>
                                </div>
                                <div className="settings-control">
                                    <label className="toggle">
                                        <input id="file-editor" type="checkbox" defaultChecked />
                                        <span className="toggle-track" />
                                        <span className="toggle-text">Protected</span>
                                    </label>
                                </div>
                            </div>

                            <div className="settings-row">
                                <div className="settings-label">
                                    <label htmlFor="login-attempts">Limit Login Attempts</label>
                                    <p className="settings-help">Block IPs after repeated failed logins.</p>
                                </div>
                                <div className="settings-control">
                                    <input id="login-attempts" type="number" min="1" defaultValue="3" />
                                </div>
                            </div>

                            <div className="settings-row">
                                <div className="settings-label">
                                    <label htmlFor="hide-version">Obscurity</label>
                                    <p className="settings-help">Remove the WordPress version from source code and feeds.</p>
                                </div>
                                <div className="settings-control">
                                    <label className="checkbox">
                                        <input id="hide-version" type="checkbox" defaultChecked />
                                        Hide WP version
                                    </label>
                                </div>
                            </div>

                            <div className="form-footer">
                                <button type="button" className="button primary">Save Hardening Rules</button>
                                <span className="muted">Last saved 10 minutes ago.</span>
                            </div>
                        </form>
                    ) : (
                        <div className="empty-state">
                            <h3>{hardeningTabs.find((tab) => tab.id === activeTab).label}</h3>
                            <p>Configure advanced policies for this area. Connect data via the REST API when ready.</p>
                            <button type="button" className="button ghost">Add Configuration</button>
                        </div>
                    )}
                </section>
                <aside className="side-panel">
                    <div className="side-card">
                        <h3>Hardening Status</h3>
                        <p className="muted">7 of 9 protections enabled.</p>
                        <ul className="status-list">
                            <li><span className="status-dot success" />File editor disabled</li>
                            <li><span className="status-dot success" />XML-RPC blocked</li>
                            <li><span className="status-dot warning" />REST API limited</li>
                        </ul>
                    </div>
                    <div className="side-card highlight">
                        <h3>Quick Wins</h3>
                        <p className="muted">Enable two more rules to reach 90% hardening.</p>
                        <button type="button" className="button primary">Apply Defaults</button>
                    </div>
                </aside>
            </div>
        </div>
    );
};

export default Hardening;
