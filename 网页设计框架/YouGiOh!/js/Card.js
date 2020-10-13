function Card() {
    var init = function(name, base, proper, race, rank, adjust, info, atk, def) {
        this.CardName = name;
        this.CardBase = base;
        this.CardProperty = proper;
        this.CardRace = race;
        this.CardRank = rank;
        this.Adjustment = adjust;
        this.CardInfo = info;
        this.ATK = atk;
        this.DEF = def;
    }
    init();
    this.getName = function() {
        return this.CardName;
    }
    this.getBase = function() {
        return this.CardBase;
    }
    this.getProperty = function() {
        return this.CardProperty;
    }
    this.getRace = function() {
        return this.CardRace;
    }
    this.getRank = function() {
        return this.CardRank;
    }
    this.getAdjustmen = function() {
        return this.Adjustment;
    }
    this.getInfo = function() {
        return this.CardInfo;
    }
    this.getATK = function() {
        return this.ATK;
    }
    this.getDEF = function() {
        return this.DEF;
    }
}