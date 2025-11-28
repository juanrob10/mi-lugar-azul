const activitiesData = {
    emocional: `
        <div class="detail-hero hero-emocional">
            <div class="hero-bg"></div>
            <div class="hero-content">
                <div class="hero-icon-wrapper">
                    <span class="hero-icon">🧠</span>
                </div>
                <h2>Gestión Emocional</h2>
                <p class="hero-subtitle">Inteligencia del Corazón</p>
            </div>
        </div>
        <div class="detail-content-wrapper">
            <div class="detail-card glass-effect">
                <p class="detail-description">Ayudamos a los pequeños a identificar, comprender y expresar sus emociones de manera saludable. A través de juegos y dinámicas, fomentamos la inteligencia emocional desde temprana edad.</p>
                
                <div class="detail-section">
                    <h3>Beneficios Clave</h3>
                    <ul class="benefit-grid">
                        <li class="benefit-item">
                            <span class="benefit-icon">🎭</span>
                            <div class="benefit-text">
                                <strong>Reconocimiento</strong>
                                <p>Identificar alegría, tristeza, enojo.</p>
                            </div>
                        </li>
                        <li class="benefit-item">
                            <span class="benefit-icon">🌬️</span>
                            <div class="benefit-text">
                                <strong>Autorregulación</strong>
                                <p>Técnicas de respiración y calma.</p>
                            </div>
                        </li>
                        <li class="benefit-item">
                            <span class="benefit-icon">❤️</span>
                            <div class="benefit-text">
                                <strong>Empatía</strong>
                                <p>Entender los sentimientos de otros.</p>
                            </div>
                        </li>
                        <li class="benefit-item">
                            <span class="benefit-icon">🗣️</span>
                            <div class="benefit-text">
                                <strong>Expresión</strong>
                                <p>Comunicar lo que sienten sin miedo.</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="action-area">
                    <button class="back-btn" onclick="showList()" aria-label="Regresar a Servicios">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <line x1="19" y1="12" x2="5" y2="12"></line>
                            <polyline points="12 19 5 12 12 5"></polyline>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    `,
    arte: `
        <div class="detail-hero hero-arte">
            <div class="hero-bg"></div>
            <div class="hero-content">
                <div class="hero-icon-wrapper">
                    <span class="hero-icon">🎨</span>
                </div>
                <h2>Arte Terapia</h2>
                <p class="hero-subtitle">Creando y Sanando</p>
            </div>
        </div>
        <div class="detail-content-wrapper">
            <div class="detail-card glass-effect">
                <p class="detail-description">El arte es un lenguaje universal. Utilizamos la pintura, el dibujo y el modelado como herramientas para que los niños expresen su mundo interior, desarrollen su creatividad y encuentren calma.</p>
                
                <div class="detail-section">
                    <h3>Exploración Creativa</h3>
                    <ul class="benefit-grid">
                        <li class="benefit-item">
                            <span class="benefit-icon">🖌️</span>
                            <div class="benefit-text">
                                <strong>Creatividad</strong>
                                <p>Libertad para imaginar y crear.</p>
                            </div>
                        </li>
                        <li class="benefit-item">
                            <span class="benefit-icon">👐</span>
                            <div class="benefit-text">
                                <strong>Motricidad Fina</strong>
                                <p>Uso de pinceles, arcilla y texturas.</p>
                            </div>
                        </li>
                        <li class="benefit-item">
                            <span class="benefit-icon">🌈</span>
                            <div class="benefit-text">
                                <strong>Expresión No Verbal</strong>
                                <p>Comunicar a través del color.</p>
                            </div>
                        </li>
                        <li class="benefit-item">
                            <span class="benefit-icon">🧘</span>
                            <div class="benefit-text">
                                <strong>Relajación</strong>
                                <p>El arte como medio de calma.</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="action-area">
                    <button class="back-btn" onclick="showList()" aria-label="Regresar a Servicios">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <line x1="19" y1="12" x2="5" y2="12"></line>
                            <polyline points="12 19 5 12 12 5"></polyline>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    `,
    habilidades: `
        <div class="detail-hero hero-habilidades">
            <div class="hero-bg"></div>
            <div class="hero-content">
                <div class="hero-icon-wrapper">
                    <span class="hero-icon">🧩</span>
                </div>
                <h2>Desarrollo de Habilidades</h2>
                <p class="hero-subtitle">Aprendizaje Lúdico</p>
            </div>
        </div>
        <div class="detail-content-wrapper">
            <div class="detail-card glass-effect">
                <p class="detail-description">Potenciamos las capacidades cognitivas y motrices de tu hijo mediante actividades lúdicas y material didáctico especializado, siempre respetando su ritmo y etapa de desarrollo.</p>
                
                <div class="detail-section">
                    <h3>Áreas de Enfoque</h3>
                    <ul class="benefit-grid">
                        <li class="benefit-item">
                            <span class="benefit-icon">🏗️</span>
                            <div class="benefit-text">
                                <strong>Resolución de Problemas</strong>
                                <p>Rompecabezas y lógica.</p>
                            </div>
                        </li>
                        <li class="benefit-item">
                            <span class="benefit-icon">👁️</span>
                            <div class="benefit-text">
                                <strong>Coordinación</strong>
                                <p>Ojo-mano y destreza manual.</p>
                            </div>
                        </li>
                        <li class="benefit-item">
                            <span class="benefit-icon">🔢</span>
                            <div class="benefit-text">
                                <strong>Conceptos Básicos</strong>
                                <p>Colores, formas, números.</p>
                            </div>
                        </li>
                        <li class="benefit-item">
                            <span class="benefit-icon">🧸</span>
                            <div class="benefit-text">
                                <strong>Juego Estructurado</strong>
                                <p>Aprender reglas y turnos.</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="action-area">
                    <button class="back-btn" onclick="showList()" aria-label="Regresar a Servicios">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <line x1="19" y1="12" x2="5" y2="12"></line>
                            <polyline points="12 19 5 12 12 5"></polyline>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    `,
    academico: `
        <div class="detail-hero hero-academico">
            <div class="hero-bg"></div>
            <div class="hero-content">
                <div class="hero-icon-wrapper">
                    <span class="hero-icon">📚</span>
                </div>
                <h2>Enfoque Académico</h2>
                <p class="hero-subtitle">Bases para el Futuro</p>
            </div>
        </div>
        <div class="detail-content-wrapper">
            <div class="detail-card glass-effect">
                <p class="detail-description">Brindamos apoyo personalizado para nivelación académica y preparación escolar. Fortalecemos las bases en lectura, escritura y pensamiento lógico para que tu hijo se sienta seguro y capaz.</p>
                
                <div class="detail-section">
                    <h3>Apoyo Escolar</h3>
                    <ul class="benefit-grid">
                        <li class="benefit-item">
                            <span class="benefit-icon">📝</span>
                            <div class="benefit-text">
                                <strong>Lectura y Escritura</strong>
                                <p>Iniciación y refuerzo.</p>
                            </div>
                        </li>
                        <li class="benefit-item">
                            <span class="benefit-icon">🧮</span>
                            <div class="benefit-text">
                                <strong>Pensamiento Lógico</strong>
                                <p>Matemáticas divertidas.</p>
                            </div>
                        </li>
                        <li class="benefit-item">
                            <span class="benefit-icon">🎒</span>
                            <div class="benefit-text">
                                <strong>Hábitos de Estudio</strong>
                                <p>Rutinas y concentración.</p>
                            </div>
                        </li>
                        <li class="benefit-item">
                            <span class="benefit-icon">🚀</span>
                            <div class="benefit-text">
                                <strong>Confianza</strong>
                                <p>Seguridad en sus capacidades.</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="action-area">
                    <button class="back-btn" onclick="showList()" aria-label="Regresar a Servicios">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <line x1="19" y1="12" x2="5" y2="12"></line>
                            <polyline points="12 19 5 12 12 5"></polyline>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    `,
    ejecutivas: `
        <div class="detail-hero hero-ejecutivas">
            <div class="hero-bg"></div>
            <div class="hero-content">
                <div class="hero-icon-wrapper">
                    <span class="hero-icon">⚙️</span>
                </div>
                <h2>Funciones Ejecutivas</h2>
                <p class="hero-subtitle">Mente Organizada</p>
            </div>
        </div>
        <div class="detail-content-wrapper">
            <div class="detail-card glass-effect">
                <p class="detail-description">Desarrollamos habilidades clave para el éxito en la vida diaria y escolar. A través de juegos estratégicos, fortalecemos la capacidad de planificar, concentrarse y regular impulsos. <strong>Especialmente diseñado para apoyar a niños con TDAH.</strong></p>
                
                <div class="detail-section">
                    <h3>Habilidades para la Vida</h3>
                    <ul class="benefit-grid">
                        <li class="benefit-item">
                            <span class="benefit-icon">📅</span>
                            <div class="benefit-text">
                                <strong>Planificación</strong>
                                <p>Organizar pasos para una meta.</p>
                            </div>
                        </li>
                        <li class="benefit-item">
                            <span class="benefit-icon">🛑</span>
                            <div class="benefit-text">
                                <strong>Autocontrol</strong>
                                <p>Pensar antes de actuar.</p>
                            </div>
                        </li>
                        <li class="benefit-item">
                            <span class="benefit-icon">🧠</span>
                            <div class="benefit-text">
                                <strong>Memoria de Trabajo</strong>
                                <p>Recordar y usar información.</p>
                            </div>
                        </li>
                        <li class="benefit-item">
                            <span class="benefit-icon">🔄</span>
                            <div class="benefit-text">
                                <strong>Flexibilidad</strong>
                                <p>Adaptarse a cambios.</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="action-area">
                    <button class="back-btn" onclick="showList()" aria-label="Regresar a Servicios">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <line x1="19" y1="12" x2="5" y2="12"></line>
                            <polyline points="12 19 5 12 12 5"></polyline>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    `
};

const activitiesList = document.getElementById('activities-list');
const activityDetail = document.getElementById('activity-detail');

document.querySelectorAll('.activity-card').forEach(card => {
    card.addEventListener('click', () => {
        const id = card.getAttribute('data-id');
        if (activitiesData[id]) {
            activityDetail.innerHTML = activitiesData[id];
            activitiesList.classList.add('hidden');
            activityDetail.classList.remove('hidden');
            activityDetail.classList.add('activity-detail');
            // Scroll to top of section to ensure smooth transition
            document.getElementById('activities').scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

function showList() {
    activityDetail.classList.add('hidden');
    activitiesList.classList.remove('hidden');
    document.getElementById('activities').scrollIntoView({ behavior: 'smooth' });
}

// Make showList globally available for the onclick handler in the HTML string
window.showList = showList;
