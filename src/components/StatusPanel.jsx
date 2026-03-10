function StatusPanel({ status, setStatus }) {
    return (
        <div>
            <h3>Status: {status}</h3>

            <button onClick={() => setStatus("Active")}>
                Active
            </button>

            <button onClick={() => setStatus("Inactive")}>
                Inactive
            </button>
        </div>
    );
}
export default StatusPanel;