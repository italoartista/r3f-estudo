import AnimatedTorus from "./AnimatedTorus"

// Adicionar o listener para ignorar exceções não capturadas
Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from failing the test
  return false
})

describe('renders the component <AnimatedTorus />', () => {

  beforeEach(() => {
    cy.mount(<AnimatedTorus />)
  })

  it('renders the Canvas component', () => {
    // Verificar se o componente <Canvas> está presente
    cy.get("[data-cy='animated-torus']").should('exist')
  })
})