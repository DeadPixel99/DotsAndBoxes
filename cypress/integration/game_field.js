import { SIZES, COLORS, PLAYERS } from "../../src/js/consts/playground";
//consts
const expectedBoxSize = (SIZES.GRID_SIZE - 1) * (SIZES.GRID_SIZE - 1);
const edge1 = 'svg g:nth-child(1) line:nth-child(2)';
const edge2 = 'svg g:nth-child(1) line:nth-child(3)';
const edge21 = 'svg g:nth-child(16) line:nth-child(2)';
const edge22 = 'svg g:nth-child(16) line:nth-child(3)';
const edge23 = 'svg g:nth-child(16) line:nth-child(4)';
const edge24 = 'svg g:nth-child(16) line:nth-child(5)';
const edge2b = 'svg g:nth-child(16) rect';


describe('Loading page', function () {
    it('Page loads', function () {
        cy.visit('http://localhost:8080/'); //WEB-PACK DEV SERVER URL
    })
});

describe('Playground items quantity', function () {

    it('Squares correct quantity', function () {
        cy.get('.game-field g').should(e => {
            expect(e).to.have.lengthOf(expectedBoxSize)
        })
    });

    it('Dots correct quantity', function () {
        cy.get('.game-field g circle').should(e => {
            expect(e).to.have.lengthOf(expectedBoxSize * 4)
        })
    });

    it('Edges correct quantity', function () {
        cy.get('.game-field g line').should(e => {
            expect(e).to.have.lengthOf(expectedBoxSize * 4)
        })
    });
});

describe('Init colors', function () {

    it('Dots init color', function () {
        cy.get('.game-field g circle').its('fill').should('be', COLORS.DOT)
    });

    it('Edges init color', function () {
        cy.get('.game-field g line').its('stroke').should('be', COLORS.BACKGROUND)
    });

});

describe('Players interaction', function () {

    it('Correct colors after players click', function () {
        cy.get(edge1).click();
        cy.get(edge2).click();
        cy.get(edge1).should(e => {
            expect(e).to.have.attr('stroke', PLAYERS.PLAYER_1)
        });
        cy.get(edge2).should(e => {
            expect(e).to.have.attr('stroke', PLAYERS.PLAYER_2)
        });
    });


    it('Edge don\'t change color after re-click', function () {
        cy.get(edge2).click();
        cy.get(edge2).should(e => {
            expect(e).to.have.attr('stroke', PLAYERS.PLAYER_2)
        });
    });

    it('Correct filled box color', function () {
        cy.get(edge21).click();
        cy.get(edge22).click();
        cy.get(edge23).click();
        cy.get(edge24).click();
        cy.get(edge2b).should(e => {
            expect(e).to.have.attr('fill', PLAYERS.PLAYER_2)
        });
    });

    it('If box filled don\'t change player', function () {
        cy.get('svg g:nth-child(2) line:nth-child(3)').click();
        cy.get('svg g:nth-child(2) line:nth-child(3)').should(e => {
            expect(e).to.have.attr('stroke', PLAYERS.PLAYER_2)
        });
    });

    it('Correct behavior if 2 boxes filled at once', function () {
        cy.get('svg g:nth-child(7) line:nth-child(2)').click();
        cy.get('svg g:nth-child(7) line:nth-child(3)').click();
        cy.get('svg g:nth-child(8) line:nth-child(2)').click();
        cy.get('svg g:nth-child(15) line:nth-child(3)').click();
        cy.get('svg g:nth-child(11) line:nth-child(2)').click();
        cy.get('svg g:nth-child(12) line:nth-child(2)').click();
        cy.get('svg g:nth-child(11) line:nth-child(3)').click();

        cy.get('svg g:nth-child(7) rect').should(e => {
            expect(e).to.have.attr('fill', PLAYERS.PLAYER_1)
        });

        cy.get('svg g:nth-child(11) rect').should(e => {
            expect(e).to.have.attr('fill', PLAYERS.PLAYER_1)
        });

        cy.get('svg g:nth-child(15) line:nth-child(5)').click();
        cy.get('svg g:nth-child(15) line:nth-child(5)').should(e => {
            expect(e).to.have.attr('stroke', PLAYERS.PLAYER_1)
        });
    });

});