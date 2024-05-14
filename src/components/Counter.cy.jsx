/* eslint-disable no-undef */

import Counter from './Counter.jsx'


describe('<Counter />', () => {
	it('renders', () => {
		// see: https://on.cypress.io/mounting-react
		cy.mount(<Counter />)
	})

	// 0.1 det ska finnas knappar med texten "+" och "-" och "Surprise me"
	it('should have + button', () => {
		cy.mount(<Counter />)
		const plus = cy.get('.add-button').contains('+')
		plus.should('be.visible')  // motsvarar expect...toBe
	})
	it('should have - button', () => {
		cy.mount(<Counter />)
		cy.get('.subtract-button').contains('-').should('be.visible')
	})
	it('should have random button', () => {
		cy.mount(<Counter />)
		cy.get('.random-button').contains('Surprise me').should('be.visible')
	})
})
