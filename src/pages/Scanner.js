import { useState } from 'react';
import SubTabs from '../components/SubTabs';
import useUrlTab from '../hooks/useUrlTab';

const scanTabs = [
    { id: 'scan', label: 'Scan Now' },
    { id: 'schedule', label: 'Schedule' },
    { id: 'ignore', label: 'Ignore List' },
];

const Scanner = () => {
    const [activeTab, setActiveTab] = useUrlTab({ tabs: scanTabs, defaultTab: 'scan' });
    const [isScanning, setIsScanning] = useState(false);

    return (
        <div className="page">
            <div className="page-header">
                <div>
                    <h1>Scanner</h1>
                    <p>Monitor file integrity, malware signatures, and core checks.</p>
                </div>
                <button type="button" className="button ghost">View Scan History</button>
            </div>

            <SubTabs tabs={scanTabs} activeTab={activeTab} onChange={setActiveTab} ariaLabel="Scanner sections" />

            <section className="panel">
                {activeTab === 'scan' ? (
                    <div className="scan-layout">
                        <div className="scan-action">
                            <h3>Run a manual scan</h3>
                            <p className="muted">Check plugins, themes, and core files for changes.</p>
                            <button
                                type="button"
                                className="button primary"
                                onClick={() => setIsScanning((prev) => !prev)}
                            >
                                {isScanning ? 'Stop Scan' : 'Start New Scan'}
                            </button>
                        </div>
                        {isScanning && (
                            <div className="scan-progress">
                                <div className="progress-header">
                                    <span>Scanning /wp-content/plugins</span>
                                    <span className="muted">58%</span>
                                </div>
                                <div className="progress-bar">
                                    <span style={{ width: '58%' }} />
                                </div>
                            </div>
                        )}
                        <div className="scan-results">
                            <h3>Latest Results</h3>
                            <ul className="result-list">
                                <li>
                                    <span className="pill warning">Modified</span>
                                    wp-content/themes/securepilot/functions.php
                                </li>
                                <li>
                                    <span className="pill success">Clean</span>
                                    wp-content/plugins/wp-security-pilot/index.js
                                </li>
                                <li>
                                    <span className="pill danger">Flagged</span>
                                    wp-content/uploads/tmp/cache.php
                                </li>
                            </ul>
                        </div>
                    </div>
                ) : (
                    <div className="empty-state">
                        <h3>{scanTabs.find((tab) => tab.id === activeTab).label}</h3>
                        <p>Schedule automated scans and manage exclusions when your API is ready.</p>
                        <button type="button" className="button ghost">Configure</button>
                    </div>
                )}
            </section>
        </div>
    );
};

export default Scanner;
