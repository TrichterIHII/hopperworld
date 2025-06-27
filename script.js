document.addEventListener("DOMContentLoaded", function(){
        const button_galarie = document.getElementById("galarie");
        const button_updates = document.getElementById("updates");
        
        button_galarie.addEventListener("click", () => goTo("galarie"));
        button_updates.addEventListener("click", () => goTo("updates"));
        
        function goTo(place) {
          if (place === "galarie") {
            document.getElementById("container_galarie").scrollIntoView({ behavior: "smooth" });
          }
          if (place === "updates") {
            document.getElementById("container_updates").scrollIntoView({ behavior: "smooth" });
          }
        }
        
        // Popup functionality
        const popupOverlay = document.getElementById('popupOverlay');
        const popup = document.getElementById('popup');
        const closeBtn = document.getElementById('closeBtn');
        const popupContent = document.getElementById('popupContent');
        
        // Sample changelog data
        const changelogData = {
          '1.0.1': {
            title: 'Version 1.0.1 Changelog',
            content: `
              <h4>🚀 Neue Features</h4>
              <ul>
                <li>Verbesserte Galerie-Ansicht</li>
                <li>Popup-System hinzugefügt</li>
                <li>Responsive Design verbessert</li>
              </ul>
              <h4>🐛 Fehlerbehebungen</h4>
              <ul>
                <li>UTF-8 Problem behoben</li>
                <li>Navigation korrigiert</li>
                <li>Popup-Funktionalität implementiert</li>
              </ul>
            `
          },
          '1.0.0': {
            title: 'Version 1.0.0 Changelog',
            content: `
              <h4>Erstes Release!</h4>
              <ul>
                <li>2D Tyle-Map</li>
                <li>Mobs mit verschiedenen Fähigkeiten</li>
                <li>Grundlegende Features (Lebensleiste, Kampfsysthem, ect. )</li>
                <li>Standart Texturen</li>
              </ul>
            `
          }
        };
        
        // Add event listeners to changelog links
        document.querySelectorAll('.changelog-link').forEach(link => {
          link.addEventListener('click', function(e) {
            e.preventDefault();
            const version = this.getAttribute('data-version');
            showChangelog(version);
          });
        });
        
        function showChangelog(version) {
          const changelog = changelogData[version];
          if (changelog) {
            popupContent.innerHTML = `
              <h3>${changelog.title}</h3>
              ${changelog.content}
            `;
            popupOverlay.style.display = 'block';
            document.body.style.overflow = 'hidden';
          }
        }
        
        // Close popup functionality
        closeBtn.addEventListener('click', closePopup);
        popupOverlay.addEventListener('click', function(e) {
          if (e.target === popupOverlay) {
            closePopup();
          }
        });
        
        // Close with Escape key
        document.addEventListener('keydown', function(e) {
          if (e.key === 'Escape' && popupOverlay.style.display === 'block') {
            closePopup();
          }
        });
        
        function closePopup() {
          popupOverlay.style.display = 'none';
          document.body.style.overflow = 'auto';
        }
      });
