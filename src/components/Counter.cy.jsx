/* eslint-disable no-undef */

import Counter from './Counter.jsx'


describe('<Counter />', () => {
	beforeEach(() => {
		cy.mount(<Counter />)
	})
	
	it('renders', () => {
		// see: https://on.cypress.io/mounting-react
		cy.mount(<Counter />)
	})

	// 0.1 det ska finnas knappar med texten "+" och "-" och "Surprise me"
	describe('0.1 det ska finnas knappar med texten "+" och "-" och "Surprise me"', () => {
		it('should have + button', () => {
			const plus = cy.get('.add-button').contains('+')
			plus.should('be.visible')  // motsvarar expect...toBe
		})
		it('should have - button', () => {
			cy.get('.subtract-button').contains('-').should('be.visible')
		})
		it('should have random button', () => {
			cy.get('.random-button').contains('Surprise me').should('be.visible')
		})
	})

	// 0.2 användaren ska se talet 1 initialt(innan man klickat på någon knapp)
	it('should display 1 initially', () => {
		cy.get('.value').contains(1).should('be.visible')
	})

	// 1.1 när man klickar på knappen första gången "+" ska talet 2 visas i stället
	it('should display 2 after click on "+"', () => {
		const button = cy.get('.add-button')
		button.click()
		cy.get('.value').contains(2).should('be.visible')
	})


	// Till sista acceptanskriteriet
	// cy.get('.random-button').invoke('text').then(text => {
	// 	let n = Number(text)
	// 	cy.log('N is ' + text)
	// 	expect(n).to.not.be.NaN
	// })
})
