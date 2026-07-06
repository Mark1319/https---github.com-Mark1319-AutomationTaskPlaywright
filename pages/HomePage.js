class HomePage {

    constructor(page) {
        this.page = page;
        this.bookStore = page.getByRole('link', {
            name: 'Book Store Application'
        });
    }

    async open() {
        await this.page.goto('https://demoqa.com/');
    }

    async openBookStore() {
        await this.bookStore.click();
    }
}

export default HomePage;