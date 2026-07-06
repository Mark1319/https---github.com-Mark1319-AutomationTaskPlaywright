import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
class BookStorePage {

    constructor(page) {

        this.page = page;

        this.bookStoreText = page.getByText('Book Store Application');
        this.gotoStore = page.locator('#gotoStore');
        this.searchBox = page.locator('#searchBox');
        this.tableRow = page.locator('table tbody tr');
    }

    async searchBook(bookName) {

        await this.bookStoreText.click();
        await this.gotoStore.click();

        await this.searchBox.fill(bookName);
    }

    async saveBookDetails() {

        const searchDetails = await this.tableRow.locator('td').allInnerTexts();

        const bookDetails =  searchDetails.slice(1, 4);

        fs.writeFileSync(
            path.join(__dirname, '../results.txt'),
            bookDetails.join('\n')
        );
    }
}

export default BookStorePage;