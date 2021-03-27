function wybierzSymbol(symbolUzytkownika) {
    const SYMBOLS = ['kamien', 'papier','nozyczki'];
    //Math random losuje zawsze od 0 do 0.999999
    //losowanie komputera
    const wylosowanyUlamek = Math.random()*SYMBOLS.length;
    const zaokraglonyNumer = Math.ceil(wylosowanyUlamek)-1;
    const symbolKomputera = SYMBOLS[zaokraglonyNumer];
   
    const zwyciezca = porownajSymbole(symbolUzytkownika,symbolKomputera)
    
    wyswietlanieWyniku(zwyciezca);
    


    function wyswietlanieWyniku(zwyciezca) {
        let rezultat = ''
        if(zwyciezca == undefined) rezultat = "REMIS!";
        if(zwyciezca=='a') rezultat = "Wygrałeś!";
        if(zwyciezca=='b')  rezultat =  'Przegrałeś!';
        document.getElementById('wynik').innerHTML = rezultat;
    
        let elementUzytkownik = document.getElementById('symbol--uzytkownik');
        let elementKomputer = document.getElementById('symbol--komputer');
        elementUzytkownik.className = `symbol symbol--${symbolUzytkownika}`;
        elementKomputer.className = `symbol symbol--${symbolKomputera}`;
    }

}



function porownajSymbole(a,b) {
    if(a == 'kamien') {
        if (b == 'nozyczki') return 'a';
        if (b == 'kamien') return;
        if (b == 'papier') return 'b'
    }

    if(a == 'nozyczki') {
        if (b == 'nozyczki') return;
        if (b == 'kamien') return 'b';
        if (b == 'papier') return 'a'
    }

    if(a == 'papier') {
        if (b == 'nozyczki') return 'b';
        if (b == 'kamien') return 'a';
        if (b == 'papier') return;
    }
}