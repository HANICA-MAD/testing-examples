// CLASS
function Season() {
    this.season = 'Spring';
    this.nextSeason = function() {
      this.season = 'Summer';
      return this.season;
    },
    this.getNextSeason = function() {
      return this.nextSeason();
    }
};

// SUCCESS -> normal test
describe('spyOn() Demo. Season', function() {
    it('should be Summer', function() {
        var s = new Season();
        s.getNextSeason();
        expect(s.season).toEqual('Summer');
    });
});

// FAILED -> mock dependency but no result
describe('spyOn() Demo. Season', function() {
    it('should be Summer', function() {
        var s = new Season();
        spyOn(s, 'nextSeason');
        s.getNextSeason();
        expect(s.season).toEqual('Summer');
    });
});

// SUCCESS -> call trough with real value
describe('spyOn() Demo. Season', function() {
    it('should be Summer', function() {
        var s = new Season();
        spyOn(s, 'nextSeason').and.callThrough();
        s.getNextSeason();
        expect(s.season).toEqual('Summer');
    });
});

// SUCCESS -> call trough with mocked value
describe('spyOn() Demo. Season', function() {
    it('should be Autumn', function() {
        var s = new Season();
        spyOn(s, 'nextSeason').and.returnValue('Autumn');
        s.getNextSeason();
        expect(s.nextSeason()).toEqual('Autumn');
    });
});