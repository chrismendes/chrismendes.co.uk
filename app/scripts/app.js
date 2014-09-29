// -------
// App Controller
// -------
define([
    'views/home',
    'views/cv',
    'views/portfolio',
    'views/skills',
    'views/employment',
    'views/learning',
    'views/workflow',
    'views/about',
    // 'fastclick'
], function(HomeView, CvView, PortfolioView, SkillsView, EmploymentView, LearningView, WorkflowView, AboutView/*, FastClick*/) {

    // new FastClick(document.body);

    return {

        currentView: null,

        // Destroy current view before loading the next
        showView: function(nextView) {
            if(this.currentView) {
                this.currentView.destroy();
            }
            this.currentView = nextView;
            this.currentView.render();
        },

        // Home Page
        showHome: function() {
            var home = new HomeView();
            this.showView(home);
        },

        // CV Page
        showCV: function() {
            var cv = new CvView();
            this.showView(cv);
        },

        // Portfolio Page
        showPortfolio: function() {
            var portfolio = new PortfolioView();
            this.showView(portfolio);
        },

        // Skills Page
        showSkills: function() {
            var skills = new SkillsView();
            this.showView(skills);
        },

        // Employment Page
        showEmployment: function() {
            var employment = new EmploymentView();
            this.showView(employment);
        },

        // Learning Page
        showLearning: function() {
            var learning = new LearningView();
            this.showView(learning);
        },

        // Dev Workflow Page
        showWorkflow: function() {
            var workflow = new WorkflowView();
            this.showView(workflow);
        },

        // About Me Page
        showAboutMe: function() {
            var about = new AboutView();
            this.showView(about);
        }

    }

});