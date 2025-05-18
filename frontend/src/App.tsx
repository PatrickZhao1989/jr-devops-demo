import { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState('Loading...');
  const backendBaseUrl = "jrdevops-hgdmhvdfeafbcmde.australiasoutheast-01.azurewebsites.net/api"
  const helloworldEndpoint = `${backendBaseUrl}/helloworld`;

  useEffect(() => {
    fetch("https://jrdevops-hgdmhvdfeafbcmde.australiasoutheast-01.azurewebsites.net/api/HelloWorld")
      .then((res) => res.text())
      .then((data) => setMessage(data))
      .catch((err) => {
        console.error("Error fetching:", err);
        setMessage("Failed to load message");
      });
	console.log("Fetching from:", helloworldEndpoint);
  }, []);

  return (
    <div style={{ padding: 40 }}>
      <h1>🌐 Frontend Talking to Backend</h1>
      <p><strong>{message}</strong></p>
    </div>
  );
}

export default App;
