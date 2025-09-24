// Language Switcher Component
// This file contains the language switching functionality for the website

class LanguageSwitcher {
    constructor() {
        this.currentLanguage = 'nl';
        this.supportedLanguages = ['nl', 'en', 'fr', 'de'];
        this.init();
    }

    init() {
        this.createLanguageSwitcher();
        this.bindEvents();
    }

    createLanguageSwitcher() {
        // Create language switcher HTML
        const switcherHTML = `
            <div class="language-switcher fixed top-20 right-4 z-50">
                <div class="bg-white rounded-lg shadow-lg p-2">
                    <div class="flex items-center space-x-2">
                        <span class="text-sm text-gray-600">Taal:</span>
                        <div class="relative">
                            <button class="language-toggle flex items-center space-x-1 px-3 py-1 rounded-md hover:bg-gray-100 transition-colors duration-200">
                                <span class="flag">🇳🇱</span>
                                <span class="language-code text-sm font-medium">NL</span>
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                                </svg>
                            </button>
                            <div class="language-dropdown absolute top-full right-0 mt-1 bg-white rounded-lg shadow-lg border border-gray-200 hidden">
                                <div class="py-1">
                                    <button class="language-option w-full text-left px-4 py-2 hover:bg-gray-100 transition-colors duration-200 flex items-center space-x-2" data-lang="nl">
                                        <span class="flag">🇳🇱</span>
                                        <span class="language-name">Nederlands</span>
                                    </button>
                                    <button class="language-option w-full text-left px-4 py-2 hover:bg-gray-100 transition-colors duration-200 flex items-center space-x-2" data-lang="en">
                                        <span class="flag">🇬🇧</span>
                                        <span class="language-name">English</span>
                                    </button>
                                    <button class="language-option w-full text-left px-4 py-2 hover:bg-gray-100 transition-colors duration-200 flex items-center space-x-2" data-lang="fr">
                                        <span class="flag">🇫🇷</span>
                                        <span class="language-name">Français</span>
                                    </button>
                                    <button class="language-option w-full text-left px-4 py-2 hover:bg-gray-100 transition-colors duration-200 flex items-center space-x-2" data-lang="de">
                                        <span class="flag">🇩🇪</span>
                                        <span class="language-name">Deutsch</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;

        // Insert into DOM
        document.body.insertAdjacentHTML('beforeend', switcherHTML);
    }

    bindEvents() {
        const toggle = document.querySelector('.language-toggle');
        const dropdown = document.querySelector('.language-dropdown');
        const options = document.querySelectorAll('.language-option');

        // Toggle dropdown
        toggle.addEventListener('click', (e) => {
            e.stopPropagation();
            dropdown.classList.toggle('hidden');
        });

        // Close dropdown when clicking outside
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.language-switcher')) {
                dropdown.classList.add('hidden');
            }
        });

        // Handle language selection
        options.forEach(option => {
            option.addEventListener('click', (e) => {
                const selectedLang = e.currentTarget.dataset.lang;
                this.switchLanguage(selectedLang);
                dropdown.classList.add('hidden');
            });
        });
    }

    switchLanguage(language) {
        if (!this.supportedLanguages.includes(language)) {
            console.error('Unsupported language:', language);
            return;
        }

        this.currentLanguage = language;
        
        // Update UI
        this.updateLanguageSwitcher(language);
        
        // Update page language attribute
        document.documentElement.lang = language;
        
        // Store preference
        localStorage.setItem('preferred-language', language);
        
        // In a real implementation, you would:
        // 1. Load the appropriate language file
        // 2. Update all text content on the page
        // 3. Possibly redirect to language-specific URLs
        
        console.log('Language switched to:', language);
        
        // For now, just show a message
        this.showLanguageMessage(language);
    }

    updateLanguageSwitcher(language) {
        const toggle = document.querySelector('.language-toggle');
        const flag = toggle.querySelector('.flag');
        const code = toggle.querySelector('.language-code');
        
        const languageData = {
            'nl': { flag: '🇳🇱', code: 'NL' },
            'en': { flag: '🇬🇧', code: 'EN' },
            'fr': { flag: '🇫🇷', code: 'FR' },
            'de': { flag: '🇩🇪', code: 'DE' }
        };
        
        const data = languageData[language];
        if (data) {
            flag.textContent = data.flag;
            code.textContent = data.code;
        }
    }

    showLanguageMessage(language) {
        const messages = {
            'nl': 'Taal gewijzigd naar Nederlands',
            'en': 'Language changed to English',
            'fr': 'Langue changée en Français',
            'de': 'Sprache geändert zu Deutsch'
        };
        
        // Create temporary notification
        const notification = document.createElement('div');
        notification.className = 'fixed top-4 right-4 bg-accent-red text-white px-4 py-2 rounded-lg shadow-lg z-50 transition-all duration-300';
        notification.textContent = messages[language];
        
        document.body.appendChild(notification);
        
        // Remove after 3 seconds
        setTimeout(() => {
            notification.style.opacity = '0';
            notification.style.transform = 'translateY(-20px)';
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 3000);
    }

    // Load saved language preference
    loadSavedLanguage() {
        const saved = localStorage.getItem('preferred-language');
        if (saved && this.supportedLanguages.includes(saved)) {
            this.switchLanguage(saved);
        }
    }
}

// Initialize language switcher when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const languageSwitcher = new LanguageSwitcher();
    languageSwitcher.loadSavedLanguage();
});

// Export for potential use in other scripts
window.LanguageSwitcher = LanguageSwitcher;
