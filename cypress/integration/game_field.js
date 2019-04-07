import { SIZES, COLORS, PLAYERS, MAX_SCORE} from "../../src/js/consts/playground";


describe('Loading page', function () {
    it('Page loads', function () {
        cy.visit('/');
    })
});

describe('Playground items quantity', function () {

    it('Squares correct quantity', function () {
        cy.get('.game-field g').should(e => {
            expect(e).to.have.lengthOf(MAX_SCORE)
        })
    });

    it('Dots correct quantity', function () {
        cy.get('.game-field g circle').should(e => {
            expect(e).to.have.lengthOf(MAX_SCORE * 4)
        })
    });

    it('Edges correct quantity', function () {
        cy.get('.game-field g line').should(e => {
            expect(e).to.have.lengthOf(MAX_SCORE * 4)
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
        cy.get('svg g:nth-child(1) line:nth-child(2)').click();
        cy.get('svg g:nth-child(1) line:nth-child(3)').click();
        cy.get('svg g:nth-child(1) line:nth-child(2)').should(e => {
            expect(e).to.have.attr('stroke', PLAYERS.PLAYER_1)
        });
        cy.get('svg g:nth-child(1) line:nth-child(3)').should(e => {
            expect(e).to.have.attr('stroke', PLAYERS.PLAYER_2)
        });
    });


    it('Edge don\'t change color after re-click', function () {
        cy.get('svg g:nth-child(1) line:nth-child(3)').click();
        cy.get('svg g:nth-child(1) line:nth-child(3)').should(e => {
            expect(e).to.have.attr('stroke', PLAYERS.PLAYER_2)
        });
    });

    it('Correct filled box color', function () {
        cy.get('svg g:nth-child(16) line').click({force: true, multiple: true});
        cy.get('svg g:nth-child(16) rect').should(e => {
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
        cy.get('svg g:nth-child(7) line').click({force: true, multiple: true});
        cy.get('svg g:nth-child(11) line').click({force: true, multiple: true});

        cy.get('svg g:nth-child(7) rect').should(e => {
            expect(e).to.have.attr('fill', PLAYERS.PLAYER_2)
        });

        cy.get('svg g:nth-child(11) rect').should(e => {
            expect(e).to.have.attr('fill', PLAYERS.PLAYER_2)
        });

        cy.get('svg g:nth-child(15) line:nth-child(5)').click();
        cy.get('svg g:nth-child(15) line:nth-child(5)').should(e => {
            expect(e).to.have.attr('stroke', PLAYERS.PLAYER_2)
        });
    });

});