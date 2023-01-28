function HouseKeeper(yearofexperience, name, cleaningrepertoire) {
    this.yearofexperience = yearofexperience;
    this.name = name;
    this.cleaningRepertoire = this.cleaningRepertoire;

}

var HouseKeeper1 = new HouseKeeper(9, "Tom", ["lobby", "cleaning"]);


console.log(HouseKeeper1.name);
