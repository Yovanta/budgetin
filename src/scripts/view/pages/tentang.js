import UrlParser from '../../routes/url-parser';

const Tentang = {
    async render() {
        return `
        <main class="tentang-container">
            <div id="content">
                <section class="content-image">
                    <img class="gambar-daftar" src="./images/budgetin.png" alt="budgetin-aplikasi pengolah keuanganmu">
                </section>
            </div>

            <aside>
                <section class="tentang-konten">
                    <p>Mengelola keuangan merupakan hal yang penting, namun sebagian orang masih mengabaikan pentingnya hal tersebut. Mengelola keuangan berperan penting dalam mengatur keuangan supaya finansial stabil di masa depan.
                    Berdasarkan survei yang kami lakukan terhadap 32 responden 93,8% menganggap bahwa website manajemen keuangan membantu mereka dalam mengelola keuangan. Oleh karena itu, kami memutuskan untuk membangun website yang berfungsi untuk mengelola keuangan menggunakan metode 50/30/20.
                    Website ini dibangun untuk memenuhi tugas akhir capstone pada program Studi Independen Kampus Merdeka X Dicoding 2021. 
                    </p>
                </section>
            </aside>
        </main>

        `;
    },
    async afterRender() {
        const url = UrlParser.parseActiveUrlWithoutCombiner();
        // const tentangBudgetin = await TheRestaurantSource.detailRestaurant(url.id);
        // const restaurantContainer = document.querySelector('#restaurant');
        // restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurantDetail.restaurant);

    }
};

export default Tentang;