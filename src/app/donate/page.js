export default function Donate() {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-8 text-center mb-5">
          <h1 className="display-4 fw-bold text-primary mb-3">Support MWM Trust</h1>
          <p className="lead text-muted">
            Your generous donations help us reach more people with the right help, education, and guidance. Every contribution makes a difference.
          </p>
        </div>
      </div>

      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow-lg border-0 rounded-4">
            <div className="card-header bg-primary text-white text-center py-4 rounded-top-4">
              <h3 className="mb-0"><i className="bi bi-bank me-2"></i>Bank Account Details</h3>
            </div>
            <div className="card-body p-4 p-md-5 bg-light">
              <ul className="list-group list-group-flush fs-5">
                <li className="list-group-item bg-transparent d-flex justify-content-between align-items-center py-3">
                  <span className="text-muted">Account Name</span>
                  <strong className="text-end">Mission Word Movement Trust</strong>
                </li>
                <li className="list-group-item bg-transparent d-flex justify-content-between align-items-center py-3">
                  <span className="text-muted">Account No.</span>
                  <strong className="text-end">0924101042016</strong>
                </li>
                <li className="list-group-item bg-transparent d-flex justify-content-between align-items-center py-3">
                  <span className="text-muted">Bank Name</span>
                  <strong className="text-end">Canara Bank</strong>
                </li>
                <li className="list-group-item bg-transparent d-flex justify-content-between align-items-center py-3">
                  <span className="text-muted">Branch Name</span>
                  <strong className="text-end">Virudhunagar</strong>
                </li>
                <li className="list-group-item bg-transparent d-flex justify-content-between align-items-center py-3">
                  <span className="text-muted">Branch Code</span>
                  <strong className="text-end">0924</strong>
                </li>
                <li className="list-group-item bg-transparent d-flex justify-content-between align-items-center py-3">
                  <span className="text-muted">IFSC Code</span>
                  <strong className="text-end">CNRB0000924</strong>
                </li>
              </ul>
              
              <div className="mt-4 text-center">
                <p className="text-muted small">Thank you for your support!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
