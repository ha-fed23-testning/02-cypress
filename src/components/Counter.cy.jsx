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

	describe('1 "+" button', () => {
		let button
		beforeEach(() => {
			button = cy.get('.add-button')
		})
		// 1.1 när man klickar på knappen första gången "+" ska talet 2 visas i stället
		it('should display 2 after click on "+"', () => {
			// const button = cy.get('.add-button')  <- se beforeEach
			button.click()
			cy.get('.value').contains(2).should('be.visible')
		})
		// 1.2 när man klickar på knappen "+" ska antalet ändras till(tidigare tal + 1)
		it('should increase value by 1 after every click on "+"', () => {
			// const button = cy.get('.add-button')  <- se beforeEach
			button.click()
			button.click()
			button.click()
			cy.get('.value').contains(4).should('be.visible')
		})
	})

	describe('2 "-" button', () => {
		let button
		beforeEach(() => {
			button = cy.get('.subtract-button')
		})
		// 2.1 när man klickar på knappen "-" ska antalet ändras till(tidigare tal - 1)
		it('should decrease value by 1 after every click on "-"', () => {
			// cy.get('.value').invoke('text').then(textContent => cy.log('Text content 1: ', textContent))
			cy.get('.add-button').click()
			cy.get('.subtract-button').click()
			cy.get('.subtract-button').click()
			cy.get('.value').contains(0).should('be.visible')
		})
		// 2.2 när man klickar på knappen "-" och antalet är 0 ska antalet inte ändras
		it('should decrease value by 1 only down to 0', () => {
			button.click()
			button.click()
			button.click()
			button.click()
			button.click()
			cy.get('.value').contains(0).should('be.visible')
		})
	})


	// 3.1 när man klickar på knappen "Surprise me" ska antalet ändras til ett slumpat tal mellan 0 och 100
	it('should randomly select a number between 0 and 100 after click on "surprise me"', () => {
		cy.get('.random-button').click()
		// cy.get('.subtract-button').click()  <- bara för att testa .within
		cy.get('.value').invoke('text').then(text => {
			let x = Number( text.trim() )
			expect(x).to.not.be.NaN
			expect(x).to.be.within(0, 100)
			
		})
	})
})
