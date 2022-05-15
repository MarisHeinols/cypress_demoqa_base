import BasePage from "./BasePage";

class Selectable extends BasePage {
	static get url() {
		return "/selectable";
	}
	static get fields() {
		return cy.get(".list-group-item");
	}
	static get gridButton() {
		return cy.get("#demo-tab-grid");
	}
	static get gridRowOne() {
		return cy.get("#row1");
	}
	static get gridRowTwo() {
		return cy.get("#row2");
	}
	static get gridRowThree() {
		return cy.get("#row3");
	}
}

export default Selectable;
