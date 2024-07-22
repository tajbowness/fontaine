import { privacyPolicy } from './../../privacyPolicy.jsx';

export default function Privacy() {
    return (
        <div>
            <h1>Privacy Policy</h1>
            <hr className="divider" />
            <p style={{whiteSpace: "break-spaces"}}>{privacyPolicy}</p>
        </div>
    )
}