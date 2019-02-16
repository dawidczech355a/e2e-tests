const HomePage = require('../pages/thenHome');
const ModalOpen = require('../pages/Modal');
const ModalEmergencyDataInput = require('../pages/ModalEmergencyDataInput');
HomePage.homePage();
ModalOpen.goToHrThenGoToIdeas();
ModalEmergencyDataInput.fillDataInModalEmergency();
