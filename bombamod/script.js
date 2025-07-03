document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('login-form');
    const errorDiv = document.getElementById('error-message');

    if (form) {
        form.addEventListener('submit', async function (e) {
            e.preventDefault();
            errorDiv.textContent = '';
            const license = document.getElementById('license').value.trim();
            if (!license) {
                errorDiv.textContent = 'Podaj licencję!';
                return;
            }
            try {
                // Użycie proxy CORS allorigins
                const proxyUrl = 'https://api.allorigins.win/raw?url=';
                const apiUrl = `http://cbzc.edu.pl:6969/check?license=${encodeURIComponent(license)}`;
                const res = await fetch(proxyUrl + encodeURIComponent(apiUrl));
                const data = await res.json();
                if (data.status === 'valid') {
                    document.cookie = `license_access=1; path=/; max-age=86400`;
                    window.location.href = 'download.html';
                } else {
                    errorDiv.textContent = 'Nieprawidłowa licencja!';
                }
            } catch (err) {
                errorDiv.textContent = 'Błąd połączenia z serwerem.';
            }
        });
    }
});
