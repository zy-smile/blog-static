# 							Node学习

一、安装

官网下载,安装并配置path环境变量

二、了解npm命令

​			1..查看npm版本

​		`npm -v`

2. 初始化目录

   `npm init`按照提示一步一步来

   或者`npm init -y`一步完成。

3. 安装第三方包

  ​		` npm install ...`

3. 
4. 卸载第三方包

  ​		`npm uninstall ...`



4. 查看安装包列表

  ​		` npm list `

5. 安装位置

  ​		`npm install ... --save`

  ​			或者

  ​		 ` npm install ... -S`是安装在生产环境或线上环境

  

  ​		`npm install ... --save -dev`

  ​		或者

  ​		`npm install ... -D`是安装在开发环境

6. 安装cnpm淘宝的镜像

   ​	`npm install -g cnpm --registry=https://registry.npm.taobao.org`

   1. 查看是否正常运行

      `cnpm -v`

7. 管理下载源

   `npm install nrm -g`

   `nrm ls`查看下载源列表

   ![](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAeYAAACoCAIAAAC61NowAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAK+0lEQVR42u3dXbKjOBZF4RqARtpRQ82x9EP3BPqpKzKvjXT0B5L4VtTDTcrGII6WhYDtv/77n3//89/ff/8rAQBW5S/KBgDKBgBQNgBQNmUDAGUDACgbACgbAEDZAADKBgDKBgBQNgCAsgGAsgEAlA0AoGwAoGwAwN7K/vXrl3YEgMeU/etP2qz9rMp9kQB4hbJ/yK5Z2U95M/5NAwCUvcRol7IBnK/soumuBrCrWZuyAVB2i7J//7//vP3H9MXv//z6d9XcerqeXq9dDwBsrOzmUe2ntT/f+EPixT+qtqdhwgcAzlR2Cs+NZNSZH7+PVTYAUHZ5+VPKTn9OjDj2ALZXducEQmRs+6CyDboBnKzsr8KN3xwSuVD51MQIZQM4Qdkp+zRKXNn5qYnPmYqvsxafd49EtiG/KhMjAI5Sdg9sCACUDQCULXwVACgbAEDZAEDZlA0AlA0AoGwAoGwAAGUDACgbACgbAEDZAADKBgDKBgBQNgCAsgGAsgEAlA0AoGwAoGzgT65+QM4Py519fEHZ4Ovyxx1skAX3jq8pG0dJirIpG5SNim7z7LzE+rMipKP1KBsvUnZm6LfFLDbpaDrK/qMn//o/X5f/eP0PHIZ4z/lstKvG/Lr86rjkV9Wv7N/Xmd/U4vZkyib/+quVZLatWKLD6z/eDsVeGdnfyPr10NNG2Z+H/3P51QuC48dIVzxmeW071w51i8elqqNWefzrR199bmbbIksiu1O1PXfWf89xyby+uL98/RZlF7tcvlKVRU87Nyg7crw6z5qvFNlWPw3Kbt6e2jaZUf/5fe9RdvFkiLIpm7L3UHZmgmK2sotzOw2rOkbZtcelVtkN7QzKVhZLKLu2rw65INm2AT3zA5GVxL+3blD2wImR2kbQ796l7CFz2ahSdsQUDXPZVRemepQdHPU3z2UH5xziF2Bn1H/kuNRuT2SU3XY9AzspO39hOl1fMU+luxcQbOeIUz77be1tCfH+HL+XI6+MvKpqb3v4dGjxxZFx96T6j98RFFRw/h6V5kkhbDnKdla19Wh9+Homrf/mcur/uJ7LhnfuLGVT9uUwEKuN1nfZ2psVNsTXtet58EkFD0lQNgCAsgGAsikb/SfXVcvxznoAZeN1vjbryteUTdmr9wF52ZS9ez2Aso1cnpHmUp/+TolQNmVTNmW3DOvkZdsjvt5G2fmn8vJBP5knwRz1q54gL3vBvOx59R95QrLhQdDijlwdl0jevc67+ii7IczhKre36gEwedltQ1152W3b81T9x7NKIu0W+XIN7ldtbAsWmhjJP+QajKcQSdOmhgZlx4/dcGUPUV5aKS97dv3nl/dnbQePIGW/Qtk/InIoe2VlJ3nZo5U9pP7j8yGRdqNsyg4NJSh7C2XXtr+87BvqP67Oto4zUNn67CHKNjFyp7LlZffMt+Trufb1oyZGihsf+RWb4AXknrlsfXYzZWfq+POCeP4U2H0j+VNdedmL5GXfUP/B3O3gREqwwK6Oi7u8Dlc21h+tD1/PO/Oy523ewJ/r3aKuMF3ZvmD3Ha3vsrUr52VP3by23Zd/TdkAAMoGAFA2bkZeNlauw13WT9nYwNcHzLr6ZuJrysY2Unuzsmdc6HPlkLKnK3u1Cntb2Ka87MPqrfNx83f2O8qmbMouj/v4mrJX2J43+DoNvC+76umpzOlk/3oawoI3ksLuednB/OtInnUkdzv++p5c6RSOqco/RN4Qxrt7v5uU012bP75RDvjEUXbwwdni3w3rqWpfedk9DdgQRxWP+8hsalU60pBc7Nrmag6B6Wz/XfpdmpzT3Z8/vmZC4TPKjixvXs9LJka2y8tuU3b8Q2uT/sc+kr6Fspfqd7NDX/uTEd+o7KvRZW3pVK2Hstu6dJqcl72asmv3dyNlb9HvKHv1UXbzKK92PZTdrOyeiYK4UtdRdtX+bjrKXrbfzc7pHqjspWQyXtk9pdk2tzXjfH9fZS+bl734xEgkpHT4XHZwsj4S+rpsv3sqp7s5f/wtyk6lCOYfS77+MzXl9qbK/OhNfX1GXna6Do+O5FnX5m4Hb6sI/hRAqrxTorg8XaR4p9K9PRv1u0dyuvvzx9OqsZeefnwdu+RlAzPqeZ0kdMpG9WgdUP97QdkAQNkAAMrGsqecVcvR1p6gbMrGq3294OQmX4Oyt3fiwXnZ2payQdnvOlOWl/2eYw3KpmzKbh+K8jVfYz9lB3N1e/Jq9eS0f152qrw3dnZdVT0YWdzIITndKh/TlV3MpU3debX5frJCzrW87OLyTCDcs3XV0w49Od18jQeUPSpvd/E0ltXOl7fLy04d+fez66onZrMnjoqyQdmU3ajsNDkvexdlp74c7aqc7s4mAmVT9quVXeuOqRckH1T2wImRqhUqeNyh7NTx23E9c9mU3WyuR/KyU2CC+6m6irRDcFzc82s4Ch43KTuVgnR78modpHRQXnZtrPk9dRW/Ayeo4Pz+Rr5rgbnK7j/hxSOj9eHreer49lw2vHObKRs7Kds910uN1t+8Xw8+AeDhA+w0ygYAUDYAUDYQO9mvWg6oE8rGK3z9tlng4/eXr/dTtksxW7cPZesdlL2Zsvsb3WHraR952aqLsimbsim7PNDbYhZbdfE1Zf/RmeNhxOnivtRIjnNkPWdX9pF52cX6KT75GXl9JM86/llf27M5vzuT613sWcF9SfW53pFen++PkRx8yl5llH31dFlzRkTqzjWWl53Wy8uOPA0Y6ecNsVlV21N7XGozT2qTtfMfUbVfo3LM88cxvl94eGIk6JpiV2lz1qnnj8fkZU9SdvP21LbJqGTBNmU372yzN5sTFil7A2X/iOxpVnbVeii7eTT6SF525myjNle69uybsimbsrsmRqpGW5Q9XNm17TkqfLVhA3pirBtODSl7hrL5egll5wOaU1/eMWUPMcVqedkNo/7mueygqqqybZvreWVlD8wxp+wVlZ2v8sgdAsU7GYLrOdXXp+Zl5+vhSoW1P1v+6dDiiyMKG5jfnV8ezOOubedROebF9afru2vwmLKx42h9+Homrf/mHu45g13qkLLxotH6Llt7808QDPG1gSQoGwAom7IBgLLxHuRln3G87BdlRxu6mI2gm73N12cc9wX34tRQ3DdYYqFRdiaxiLJPzcsOhi4NrCXHjrIpe7qykc7Ny56nj/d0433VNnZLKJuyKbs8gOr8aMp+81B04Ma85ED3KntUXnDkLZ+f+2Be8FPFvWledn6Tvh7oSIJ2cJfj44CB9Rzfi3hHG55PfVKOOWU3jr96MhbyNsl/9G15wfKymz83PwqOPzh+VT9XL6tN5htSz5li65k7mpFPfUCO+XvOpcYoO3JCGkwy+9r90kpJZoucQm6Xl51/ZcN64squ6tuj6nlUsd0QdnpAjjllU/brlJ1uycuuCsU+Utm17fygsjfKMadsyn6jsntO2Jvfe8PEyGrK7tmeHmWfmmP+qivMc5XdkBdM2Z3KXjYve/iJdkbZX68cZl4zo56DxXYVB198+83KXjbHnLKrPTIwL/jru57KC17N11vnZafKOwTir88UUqYO0/z864jv4o/4TsqnPiPHPL2Jifdlux92i9H68PUIr1jzNO7UHHPKnjIqxJqjdcxrt4N/MmnfHHPKBgBQNgCAsgGAsgEAlA0AoGwAoGwAAGUDAGVTNgBQNgCAsgGAsikbACgbAEDZAEDZAADKBgBQNgBQNgCAsgEAlA0AlA0AoGwAAGUDAGUDACgbAFDmf3jtq5dRYZk7AAAAAElFTkSuQmCC)

   ​			`nrm test cnpm`切换淘宝的下载源

