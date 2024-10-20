# Dokumentasi NextJS Dasar

- [Dokumentasi NextJS Dasar](#dokumentasi-nextjs-dasar)
- [Styling](#styling)
  - [Global CSS](#global-css)
  - [Tailwind CSS](#tailwind-css)
  - [Moduled CSS](#moduled-css)
  - [`cslx` Library](#cslx-library)
- [Font and Images](#font-and-images)
  - [Menambahkan custom font](#menambahkan-custom-font)
  - [Menmabahkan secondary font](#menmabahkan-secondary-font)
  - [Optimalisasi gambar menggunakan `<Image>` Komponent](#optimalisasi-gambar-menggunakan-image-komponent)
- [Routing with Layout and Pages](#routing-with-layout-and-pages)
  - [membuat Route](#membuat-route)
  - [membuat nested route](#membuat-nested-route)
- [Navigasi antar halaman menggunakan `<Link>`](#navigasi-antar-halaman-menggunakan-link)
  - [Menampilkan active link menggunakan React Hook](#menampilkan-active-link-menggunakan-react-hook)


# Styling

ini adalah beberpa topik dalam styling di `NextJs`

- global.css
- styling menggunakan [Tailwind CSS](https://tailwindcss.com) dan CSS modules
- Utility package `cslx`

## Global CSS

global css biasa nya ada di dalam folder `app/ui/global.css`, biasa nya di gunakan untuk menambahkan CSS ke seluruh `routes`

cara menggunakan `global.css` :

- `import` kedalam komponen ui secara langsung
- tambahkan kedalam `root component` atau `top level page` dalam aplikasi. biasanya di `app/layout.tsx` (paling di rekomendasikan)

## Tailwind CSS

dengan menambahkan `global.css` pada top level aplikasi, kita juga bisa menambahkan tailwind directive untuk bisa menggunakan tailwind

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## Moduled CSS

buat file css modul untuk komponen tertentu misal `home.module.css` untuk membuat CSS kustom untuk home, kemudian import pada komponen yang ingin di buat CSS modulnya. misal `import style from '@/app/ui/home.module.css'` , kemudian gunakan pada komponentnya `className={style.tinyFont}`

## `cslx` Library

untuk styling elemen berdasarkan `state` nya. atau untuk men `toggle` class. dokumentasi cslx bisa di lihat di [github.com/lukeed/cslx](github.com/lukeed/cslx)

# Font and Images

## Menambahkan custom font

kita dapat menambahkan font dengan mengimport `next/font` module, itu akan mendownload font pada saat build, dan di simpan bersama aset yang lain. artinya ketika user akses aplikasi , disana tidak ada request untuk font, sehingga dapat meningkatkan performa aplikasi

untuk menambahkan font :

- buat file  baru dengan nama `fonts.ts` di folder `app/ui/`
- import font

```js
import {Montserrat} from 'next/font/google';

export const montserrat = Montserrat({
    subsets: ['latin']
});
```

- gunakan pada file root

```js
import {montserrat} from '@/app/ui/fonts';

 <body className={`${montserrat.className} antialiased`}>{children}</body>
```

## Menmabahkan secondary font

pada file `app/ui/fonts.ts`, tambahkan kode yang sama seperti di atas, kemudian pada file layout kita bisa import nama dari file nya.

## Optimalisasi gambar menggunakan `<Image>` Komponent

Kita bisa menambahkan gambar pada aplikasi kita dengan mengimpor `<Image>` komponent dari `next/image`

```js
import Image from 'next/image';

<Image
src=''
alt=''
width={}
height={}>
```

# Routing with Layout and Pages

## membuat Route

file `app/page.tsx` merupakan file spesial, itu me representasi dari homepage atau `/`, untuk membuat nested routes, kita bisa menambahkan `folder`, kemudian di dalam folder tersebut buat lagi file `page.tsx`, `app/folder/page.tsx`.

dengan memiliki file `page.tsx` di dalam `folder` nextjs akan mengkordinir lokasi page ketika mengakses halaman `website.com/folder`. dan untuk mengatur `layout`, buat layout baru di dalam `folder` dengan nama `layout.tsx`

## membuat nested route

kita ingin membuat nested route `website.com/folder/subfolder`, maka di dalam `folder` kita buat lagi satu foder dengan nama `subfolder`, di dalam nya kita buat file `page.tsx`. sama dengan `page.tsx` yang ada di folder `app/page.tsx`. hanya saja isinya yang berbeda.

> `Tips`
>
> Ketika kita membuat layout di dalam folder `dashboard`, maka `page.tsx` di dalam folder `dashboard` akan menggunakan layout yang dari `app/dashboard/layout.tsx`, bukan layout dari `app/layout.tsx`
>
> karena layout dari `app/dashboard/layout.tsx`, di jadikan sebagai `root` dalam folder `dashboard`

# Navigasi antar halaman menggunakan `<Link>`

biasa nya kita membuat link dengan menggunakan elemen `<a>`, di NextJS untuk optimasi link, kita menggunakan komponent `<Link>` yang di import dari `next/link`

## Menampilkan active link menggunakan React Hook

untuk menampilkan active link menggunakan hook `usePathname()` dari `next/navigation`