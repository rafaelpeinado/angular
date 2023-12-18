describe('my first test', () => {
    let sut; // system unit test

    beforeEach(() => {
        // não importa como modificaremos essa variável em outros testes, ele sempre será redefinida de volta ao seu estado inicial para o próximo teste.
        sut = {};
    })

    it('should be true if true', () => {
        // arrange
        sut.a = false;

        // act
        sut.a = true;

        // assert
        expect(sut.a).toBe(true);
    })
})

/*
* Podemos criar blocos de descrição conforme exemplo abaixo
*describe('user service', () => {
*    describe('getUser method', () => {
*        it('should retrieve the correct user', () => {
*
*        })
*    })
*})
*user service getUser should retrieve the correct user
*/
