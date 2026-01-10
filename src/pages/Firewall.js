import SubTabs from '../components/SubTabs';
import useUrlTab from '../hooks/useUrlTab';

const firewallTabs = [
    { id: 'traffic', label: 'Traffic Rules' },
    { id: 'ip', label: 'IP Management' },
    { id: 'geo', label: 'Geo-Blocking' },
];

const Firewall = () => {
    const [activeTab, setActiveTab] = useUrlTab({ tabs: firewallTabs, defaultTab: 'ip' });

    return (
        <div className="page">
            <div className="page-header">
                <div>
                    <h1>Firewall</h1>
                    <p>Inspect incoming traffic, manage IP access, and apply geo rules.</p>
                </div>
                <button type="button" className="button ghost">Review Rule Sets</button>
            </div>

            <SubTabs tabs={firewallTabs} activeTab={activeTab} onChange={setActiveTab} ariaLabel="Firewall sections" />

            <section className="panel">
                {activeTab === 'ip' ? (
                    <>
                        <div className="table-toolbar">
                            <div>
                                <h3>IP Management</h3>
                                <p className="muted">Track blocked and trusted addresses.</p>
                            </div>
                            <div className="inline-form">
                                <input type="text" placeholder="IP Address" />
                                <input type="text" placeholder="Reason" />
                                <button type="button" className="button primary">Add to Blacklist</button>
                            </div>
                        </div>
                        <table className="data-table">
                            <thead>
                                <tr>
                                    <th>IP Address</th>
                                    <th>Reason</th>
                                    <th>Date Added</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>192.168.1.33</td>
                                    <td>Failed Login</td>
                                    <td>Today, 09:14</td>
                                    <td><button type="button" className="link-button">Remove</button></td>
                                </tr>
                                <tr>
                                    <td>44.33.199.10</td>
                                    <td>WAF Rule Trigger</td>
                                    <td>Yesterday, 18:42</td>
                                    <td><button type="button" className="link-button">Remove</button></td>
                                </tr>
                                <tr>
                                    <td>81.12.60.199</td>
                                    <td>XML-RPC Abuse</td>
                                    <td>Sep 21, 12:10</td>
                                    <td><button type="button" className="link-button">Remove</button></td>
                                </tr>
                            </tbody>
                        </table>
                    </>
                ) : (
                    <div className="empty-state">
                        <h3>{firewallTabs.find((tab) => tab.id === activeTab).label}</h3>
                        <p>Connect your rules engine to populate this section.</p>
                        <button type="button" className="button ghost">Add Rule</button>
                    </div>
                )}
            </section>
        </div>
    );
};

export default Firewall;
