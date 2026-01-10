import { render } from '@wordpress/element';
import App from './App';

import './index.css';

const initialView = window?.wpSecurityPilotSettings?.initialView || 'dashboard';

render(<App initialView={initialView} />, document.getElementById('wp-security-pilot-root'));
