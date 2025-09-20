// Global variables
let currentSelectedDisease = null;
let femaleChart = null;
let maleChart = null;
let symptomsChart = null;
let heatChart = null;

// Mobile navigation
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');

    navToggle?.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });

    // Initialize all components
    initializeTabs();
    initializeCharts();
    initializeDiseaseSearch();
    initializeScrollEffects();
});

// Smooth scrolling
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Tab functionality
function initializeTabs() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetTab = button.getAttribute('data-tab');
            
            // Remove active class from all tabs and contents
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Add active class to clicked tab and corresponding content
            button.classList.add('active');
            document.getElementById(`${targetTab}-tab`).classList.add('active');
        });
    });
}

// Initialize charts
function initializeCharts() {
    createFemaleChart();
    createMaleChart();
    createSymptomsChart();
    createHeatChart();
}

// Female mortality chart
function createFemaleChart() {
    const ctx = document.getElementById('femaleChart');
    if (!ctx) return;

    femaleChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Cardiovascular Disease', 'Respiratory Infections', 'Stroke', 'Diabetes', 'Tuberculosis', 'Others'],
            datasets: [{
                data: [28.1, 11.2, 7.4, 3.2, 3.1, 47.0],
                backgroundColor: [
                    '#FF6B6B',
                    '#4ECDC4',
                    '#45B7D1',
                    '#96CEB4',
                    '#FFEAA7',
                    '#DDA0DD'
                ],
                borderWidth: 0
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        padding: 20,
                        usePointStyle: true
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return context.label + ': ' + context.parsed + '%';
                        }
                    }
                }
            }
        }
    });
}

// Male mortality chart
function createMaleChart() {
    const ctx = document.getElementById('maleChart');
    if (!ctx) return;

    maleChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Cardiovascular Disease', 'Chronic Respiratory', 'Stroke', 'Road Injuries', 'Tuberculosis', 'Others'],
            datasets: [{
                data: [26.4, 10.9, 7.9, 4.8, 4.2, 45.8],
                backgroundColor: [
                    '#FF6B6B',
                    '#4ECDC4',
                    '#45B7D1',
                    '#96CEB4',
                    '#FFEAA7',
                    '#DDA0DD'
                ],
                borderWidth: 0
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        padding: 20,
                        usePointStyle: true
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return context.label + ': ' + context.parsed + '%';
                        }
                    }
                }
            }
        }
    });
}

// Symptoms chart
function createSymptomsChart() {
    const ctx = document.getElementById('symptomsChart');
    if (!ctx) return;

    const topSymptoms = [
        'Vomiting', 'High Fever', 'Fatigue', 'Headache', 'Nausea',
        'Cough', 'Abdominal Pain', 'Chest Pain', 'Diarrhea', 'Dizziness'
    ];

    const symptomCounts = [23, 21, 19, 18, 16, 15, 14, 13, 12, 11];

    symptomsChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: topSymptoms,
            datasets: [{
                label: 'Frequency',
                data: symptomCounts,
                backgroundColor: 'purple',
                borderColor: 'black',
                borderWidth: 1,
                borderRadius: 4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    grid: {
                        color: 'rgba(0, 0, 0, 0.1)'
                    }
                },
                x: {
                    grid: {
                        display: false
                    },
                    ticks: {
                        maxRotation: 45
                    }
                }
            },
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    });
}

// Heat deaths chart
function createHeatChart() {
    const ctx = document.getElementById('heatChart');
    if (!ctx) return;

    heatChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Bihar', 'Telangana', 'Andhra Pradesh', 'Gujarat', 'Maharashtra', 'Rajasthan', 'Madhya Pradesh', 'Uttar Pradesh', 'Tamil Nadu', 'Kerala'],
            datasets: [{
                label: 'Heat-Related Deaths',
                data: [121, 42, 29, 8, 6, 3, 2, 2, 1, 1],
                backgroundColor: [
                    '#FF6B6B', '#FF8E53', '#FF6B6B', '#FFB74D', 
                    '#81C784', '#64B5F6', '#9575CD', '#F06292',
                    '#4DB6AC', '#90A4AE'
                ],
                borderRadius: 4,
                borderSkipped: false
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    grid: {
                        color: 'rgba(0, 0, 0, 0.1)'
                    }
                },
                x: {
                    grid: {
                        display: false
                    },
                    ticks: {
                        maxRotation: 45
                    }
                }
            },
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return 'Deaths: ' + context.parsed.y;
                        }
                    }
                }
            }
        }
    });
}

// Disease search functionality
function initializeDiseaseSearch() {
    const searchInput = document.getElementById('disease-search-input');
    const diseaseList = document.getElementById('disease-list');
    const diseaseDetails = document.getElementById('disease-details');

    if (!searchInput || !diseaseList || !diseaseDetails) return;

    // Render initial disease list
    renderDiseaseList(diseases);

    // Search functionality
    searchInput.addEventListener('input', function(e) {
        const searchTerm = e.target.value.toLowerCase();
        const filteredDiseases = diseases.filter(disease => 
            disease.name.toLowerCase().includes(searchTerm) ||
            disease.symptoms.some(symptom => symptom.toLowerCase().includes(searchTerm)) ||
            disease.description.toLowerCase().includes(searchTerm)
        );
        
        renderDiseaseList(filteredDiseases);
        
        // Clear details if current selection is not in filtered results
        if (currentSelectedDisease && !filteredDiseases.includes(currentSelectedDisease)) {
            showEmptyState();
            currentSelectedDisease = null;
        }
    });

    function renderDiseaseList(diseaseArray) {
        if (diseaseArray.length === 0) {
            diseaseList.innerHTML = `
                <div class="disease-item">
                    <div class="disease-name">No diseases found</div>
                    <div class="disease-preview">Try a different search term</div>
                </div>
            `;
            return;
        }

        diseaseList.innerHTML = '';
        
        diseaseArray.forEach(disease => {
            const diseaseItem = document.createElement('div');
            diseaseItem.className = 'disease-item';
            diseaseItem.innerHTML = `
                <div class="disease-name">${disease.name}</div>
                <div class="disease-preview">${disease.description.substring(0, 100)}...</div>
            `;
            
            diseaseItem.addEventListener('click', () => {
                // Remove active class from all items
                document.querySelectorAll('.disease-item').forEach(item => {
                    item.classList.remove('active');
                });
                
                // Add active class to clicked item
                diseaseItem.classList.add('active');
                
                // Show disease details
                showDiseaseDetail(disease);
                currentSelectedDisease = disease;
            });
            
            diseaseList.appendChild(diseaseItem);
        });
    }

    function showDiseaseDetail(disease) {
        diseaseDetails.innerHTML = `
            <div class="disease-detail-content">
                <h3>${disease.name}</h3>
                
                <div class="detail-section">
                    <h4>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                            <polyline points="14,2 14,8 20,8"/>
                            <line x1="16" y1="13" x2="8" y2="13"/>
                            <line x1="16" y1="17" x2="8" y2="17"/>
                            <polyline points="10,9 9,9 8,9"/>
                        </svg>
                        Description
                    </h4>
                    <p>${disease.description}</p>
                </div>
                
                <div class="detail-section">
                    <h4>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
                            <line x1="12" y1="9" x2="12" y2="13"/>
                            <line x1="12" y1="17" x2="12.01" y2="17"/>
                        </svg>
                        Symptoms
                    </h4>
                    <ul class="symptoms-list">
                        ${disease.symptoms.map(symptom => 
                            `<li>${symptom.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}</li>`
                        ).join('')}
                    </ul>
                </div>
                
                <div class="detail-section">
                    <h4>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                        </svg>
                        Precautions
                    </h4>
                    <ul class="precautions-list">
                        ${disease.precautions.map(precaution => 
                            `<li>${precaution.charAt(0).toUpperCase() + precaution.slice(1)}</li>`
                        ).join('')}
                    </ul>
                </div>
            </div>
        `;
    }

    function showEmptyState() {
        diseaseDetails.innerHTML = `
            <div class="empty-state">
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1">
                    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
                    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
                </svg>
                <h3>Select a disease</h3>
                <p>Choose from the list to view detailed information</p>
            </div>
        `;
    }
}

// Symptom severity calculator
function calculateSeverity() {
    const input = document.getElementById('symptom-input');
    const result = document.getElementById('severity-result');
    
    if (!input || !result) return;
    
    const symptoms = input.value.toLowerCase().split(',').map(s => s.trim());
    
    if (symptoms.length === 0 || symptoms[0] === '') {
        result.innerHTML = '<p>Please enter at least one symptom.</p>';
        result.className = 'result show';
        return;
    }
    
    let totalSeverity = 0;
    let matchedSymptoms = 0;
    
    // Sample severity weights (you can expand this with your actual data)
    const severityWeights = {
        'vomiting': 4,
        'high_fever': 7,
        'fever': 6,
        'fatigue': 3,
        'headache': 3,
        'nausea': 3,
        'cough': 4,
        'abdominal_pain': 5,
        'chest_pain': 8,
        'diarrhea': 4,
        'dizziness': 4,
        'shortness_of_breath': 7,
        'loss_of_appetite': 2,
        'muscle_aches': 3,
        'joint_pain': 4,
        'chills': 5,
        'sweating': 3,
        'weakness': 4,
        'confusion': 6,
        'blurred_vision': 5,
        'skin_rash': 3,
        'swelling': 5,
        'numbness': 4,
        'seizures': 9,
        'unconsciousness': 10,
        'severe_pain': 8,
        'bleeding': 7,
        'difficulty_breathing': 9,
        'heart_palpitations': 6
    };
    
    symptoms.forEach(symptom => {
        const normalizedSymptom = symptom.replace(/\s+/g, '_');
        if (severityWeights[normalizedSymptom]) {
            totalSeverity += severityWeights[normalizedSymptom];
            matchedSymptoms++;
        }
    });
    
    if (matchedSymptoms === 0) {
        result.innerHTML = '<p>No matching symptoms found in our database. Please check your spelling or try different symptoms.</p>';
        result.className = 'result show';
        return;
    }
    
    const averageSeverity = totalSeverity / matchedSymptoms;
    let severityLevel, severityClass, recommendation;
    
    if (averageSeverity <= 3) {
        severityLevel = 'Low';
        severityClass = 'low';
        recommendation = 'Monitor symptoms and consider home remedies. Consult a doctor if symptoms persist.';
    } else if (averageSeverity <= 6) {
        severityLevel = 'Medium';
        severityClass = 'medium';
        recommendation = 'Consider consulting a healthcare professional. Monitor symptoms closely.';
    } else {
        severityLevel = 'High';
        severityClass = 'high';
        recommendation = 'Seek immediate medical attention. These symptoms may indicate a serious condition.';
    }
    
    result.innerHTML = `
        <h4>Severity Assessment: ${severityLevel}</h4>
        <p><strong>Score:</strong> ${averageSeverity.toFixed(1)}/10</p>
        <p><strong>Matched Symptoms:</strong> ${matchedSymptoms} out of ${symptoms.length}</p>
        <p><strong>Recommendation:</strong> ${recommendation}</p>
        <small><em>Note: This is an automated assessment and should not replace professional medical advice.</em></small>
    `;
    result.className = `result show ${severityClass}`;
}

// Scroll effects
function initializeScrollEffects() {
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = 'none';
        }
    });

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Handle resize events
window.addEventListener('resize', debounce(() => {
    // Resize charts if they exist
    if (femaleChart) femaleChart.resize();
    if (maleChart) maleChart.resize();
    if (symptomsChart) symptomsChart.resize();
    if (heatChart) heatChart.resize();
}, 250));