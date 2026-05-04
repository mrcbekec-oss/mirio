const playersDB = [
    // Türkiye Milli Takımı (99 GEN)
    { id: 1001, name: "Mert Günok (TR)", pos: "GK", rating: 99, isStar: true, isSpecialTurkey: true, image: "https://ui-avatars.com/api/?name=Mert+Gunok&background=e30a17&color=fff" },
    { id: 1002, name: "Merih Demiral (TR)", pos: "CB", rating: 99, isStar: true, isSpecialTurkey: true, image: "https://ui-avatars.com/api/?name=Merih+Demiral&background=e30a17&color=fff" },
    { id: 1003, name: "Abdülkerim B. (TR)", pos: "CB", rating: 99, isStar: true, isSpecialTurkey: true, image: "https://ui-avatars.com/api/?name=Abdulkerim&background=e30a17&color=fff" },
    { id: 1004, name: "Ferdi Kadıoğlu (TR)", pos: "LB", rating: 99, isStar: true, isSpecialTurkey: true, image: "https://ui-avatars.com/api/?name=Ferdi+Kadioglu&background=e30a17&color=fff" },
    { id: 1005, name: "Zeki Çelik (TR)", pos: "RB", rating: 99, isStar: true, isSpecialTurkey: true, image: "https://ui-avatars.com/api/?name=Zeki+Celik&background=e30a17&color=fff" },
    { id: 1006, name: "Hakan Çalhanoğlu (TR)", pos: "CM", rating: 99, isStar: true, isSpecialTurkey: true, image: "https://ui-avatars.com/api/?name=Hakan+Calhanoglu&background=e30a17&color=fff" },
    { id: 1007, name: "İsmail Yüksek (TR)", pos: "CM", rating: 99, isStar: true, isSpecialTurkey: true, image: "https://ui-avatars.com/api/?name=Ismail+Yuksek&background=e30a17&color=fff" },
    { id: 1008, name: "Orkun Kökçü (TR)", pos: "CM", rating: 99, isStar: true, isSpecialTurkey: true, image: "https://ui-avatars.com/api/?name=Orkun+Kokcu&background=e30a17&color=fff" },
    { id: 1009, name: "Kenan Yıldız (TR)", pos: "LW", rating: 99, isStar: true, isSpecialTurkey: true, image: "https://ui-avatars.com/api/?name=Kenan+Yildiz&background=e30a17&color=fff" },
    { id: 1010, name: "Barış Alper (TR)", pos: "RW", rating: 99, isStar: true, isSpecialTurkey: true, image: "https://ui-avatars.com/api/?name=Baris+Alper&background=e30a17&color=fff" },
    { id: 1011, name: "Semih Kılıçsoy (TR)", pos: "ST", rating: 99, isStar: true, isSpecialTurkey: true, image: "https://ui-avatars.com/api/?name=Semih+Kilicsoy&background=e30a17&color=fff" },
    
    // Özel Kartlar
    { id: 997, name: "A. Güler (TÜRK ETK.)", pos: "CAM", rating: 99, isStar: true, isSpecialArda: true, image: "https://ui-avatars.com/api/?name=A+Guler&background=e30a17&color=fff&size=100" },
    { id: 999, name: "L. Messi (ÖZEL)", pos: "RW", rating: 99, isStar: true, isSpecialMessi: true, image: "https://images.unsplash.com/photo-1518605368461-1ee7e28989f5?auto=format&fit=crop&q=80&w=300&h=300" },
    { id: 998, name: "Z. Ibrahimovic (ÖZEL)", pos: "ST", rating: 99, isStar: true, isSpecialIbra: true, image: "https://images.unsplash.com/photo-1552318975-27dbad9b7384?auto=format&fit=crop&q=80&w=300&h=300" },
    { id: 1000, name: "C. Ronaldo (GOAT)", pos: "ST", rating: 104, isStar: true, isSpecialRonaldo: true, image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=300&h=300" },

    // Efsanevi Oyuncular (95-99)
    { id: 95, name: "Pelé", pos: "CAM", rating: 99, isStar: true, image: "https://ui-avatars.com/api/?name=Pele&background=fbbf24&color=fff&size=100" },
    { id: 96, name: "Maradona", pos: "CAM", rating: 98, isStar: true, image: "https://ui-avatars.com/api/?name=Maradona&background=fbbf24&color=fff&size=100" },
    { id: 97, name: "Zidane", pos: "CAM", rating: 97, isStar: true, image: "https://ui-avatars.com/api/?name=Zidane&background=fbbf24&color=fff&size=100" },
    { id: 98, name: "Cruyff", pos: "CF", rating: 97, isStar: true, image: "https://ui-avatars.com/api/?name=Cruyff&background=fbbf24&color=fff&size=100" },
    { id: 99, name: "R. Nazario", pos: "ST", rating: 98, isStar: true, image: "https://ui-avatars.com/api/?name=R+Nazario&background=fbbf24&color=fff&size=100" },
    { id: 100, name: "Ronaldinho", pos: "LW", rating: 96, isStar: true, image: "https://ui-avatars.com/api/?name=Ronaldinho&background=fbbf24&color=fff&size=100" },

    // Standart Kartlar (75-93)
    { id: 1, name: "K. Mbappé", pos: "ST", rating: 91, image: "https://ui-avatars.com/api/?name=Mbappe&background=random&color=fff&size=100" },
    { id: 2, name: "E. Haaland", pos: "ST", rating: 91, image: "https://ui-avatars.com/api/?name=Haaland&background=random&color=fff&size=100" },
    { id: 3, name: "K. De Bruyne", pos: "CM", rating: 90, image: "https://ui-avatars.com/api/?name=De+Bruyne&background=random&color=fff&size=100" },
    { id: 4, name: "V. Júnior", pos: "LW", rating: 89, image: "https://ui-avatars.com/api/?name=Vinicius&background=random&color=fff&size=100" },
    { id: 5, name: "J. Bellingham", pos: "CAM", rating: 88, image: "https://ui-avatars.com/api/?name=Bellingham&background=random&color=fff&size=100" },
    { id: 6, name: "H. Kane", pos: "ST", rating: 90, image: "https://ui-avatars.com/api/?name=Kane&background=random&color=fff&size=100" },
    { id: 7, name: "M. Salah", pos: "RW", rating: 89, image: "https://ui-avatars.com/api/?name=Salah&background=random&color=fff&size=100" },
    { id: 8, name: "R. Lewandowski", pos: "ST", rating: 88, image: "https://ui-avatars.com/api/?name=Lewandowski&background=random&color=fff&size=100" },
    { id: 9, name: "T. Courtois", pos: "GK", rating: 90, image: "https://ui-avatars.com/api/?name=Courtois&background=random&color=fff&size=100" },
    { id: 10, name: "Rodri", pos: "CDM", rating: 91, image: "https://ui-avatars.com/api/?name=Rodri&background=random&color=fff&size=100" },
    { id: 11, name: "Mauro Icardi", pos: "ST", rating: 85, image: "https://ui-avatars.com/api/?name=Mauro+Icardi&background=random&color=fff&size=100" },
    { id: 12, name: "B. Silva", pos: "CAM", rating: 88, image: "https://ui-avatars.com/api/?name=Bernardo+Silva&background=random&color=fff&size=100" },
    { id: 13, name: "L. Diaz", pos: "LW", rating: 87, image: "https://ui-avatars.com/api/?name=Luis+Diaz&background=random&color=fff&size=100" },
    { id: 14, name: "D. Jota", pos: "ST", rating: 86, image: "https://ui-avatars.com/api/?name=Diogo+Jota&background=random&color=fff&size=100" },
    { id: 15, name: "J. Grealish", pos: "LW", rating: 85, image: "https://ui-avatars.com/api/?name=Jack+Grealish&background=random&color=fff&size=100" },
    { id: 16, name: "O. Dembele", pos: "RW", rating: 86, image: "https://ui-avatars.com/api/?name=Ousmane+Dembele&background=random&color=fff&size=100" },
    { id: 17, name: "F. Chiesa", pos: "LW", rating: 85, image: "https://ui-avatars.com/api/?name=Federico+Chiesa&background=random&color=fff&size=100" },
    { id: 18, name: "P. Dybala", pos: "CF", rating: 87, image: "https://ui-avatars.com/api/?name=Paulo+Dybala&background=random&color=fff&size=100" },
    { id: 19, name: "X. Simons", pos: "CAM", rating: 85, image: "https://ui-avatars.com/api/?name=Xavi+Simons&background=random&color=fff&size=100" },
    { id: 20, name: "J. Frimpong", pos: "RWB", rating: 85, image: "https://ui-avatars.com/api/?name=Jeremie+Frimpong&background=random&color=fff&size=100" }
];