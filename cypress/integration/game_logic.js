import { PLAYERS, COLORS, FIRST_PLAYER } from "../../src/js/consts/playground";

describe('Loading page', function () {
    it('Page loads', function () {
        cy.visit('/'); //WEB-PACK DEV SERVER URL
    })
});

describe('Gameplay', function () {

    it('Current player correct and highlighted', function () {
        cy.get('.scores-bar div:nth-child(2)').should('have.class', 'current-p');
        cy.get('.scores-bar div:nth-child(2)').should(e => {
            expect(e).to.not.have.css('border', 'none');
        })
    });

    it('Score changes', function () {
        cy.get('.game-field g:first-child line').click({ multiple: true, force: true });
        cy.get('.scores-bar .p2').should(e => {
            expect(e).to.have.text('Player 2: 1');
        })
    });

    it('Current player highlight changes', function () {
        cy.get('.scores-bar div:nth-child(3)').should('have.class', 'current-p');
    });

    it('Win screen after filled playground', function () {
        cy.get('.game-field g line').click({ multiple: true, force: true });
        cy.get('.game-field').should('not.exist');
        cy.get('.results').should('exist');
    });

    it('Correct reset behavior', function () {
        cy.get('.results button').click();
        cy.get('.game-field').should('exist');
        cy.get('.scores-bar .p1').should('have.text','Player 1: 0');
        cy.get('.scores-bar .p2').should('have.text','Player 2: 0');
        cy.get('.game-field g rect').should(e => {
            expect(e).to.have.attr('fill', COLORS.BACKGROUND)
        })
    });


});