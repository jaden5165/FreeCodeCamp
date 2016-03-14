var interval;
var Simon = {
    sequence: [],
    copy: [],
    round: 0,
    active: true,
    strict: $("#strict").is(":checked"),

    init: function() {
        var that = this;
        $('p[data-action=start]').on('click', function() {
            that.startGame();
        });
    },

    startGame: function() {
        alert("mode:" + this.strict);
        this.sequence = [];
        this.copy = [];
        this.round = 0;
        this.active = true;
        $('h2[data-action=lose]').hide();
        $('h4').hide();
        this.newRound();
    },

    // add a new color to the sequence and animate it to the user
    newRound: function() {
        $('[data-round]').text(++this.round);
        if(this.round == 3)
        {
            alert("You win the game!");
        }
        this.sequence.push(this.randomNumber());
        this.copy = this.sequence.slice(0);
        this.animate(this.sequence);
    },

    registerClick: function(e) {
        var desiredResponse = this.copy.shift();
        var actualResponse = $(e.target).data('tile');
        this.active = (desiredResponse === actualResponse);
        this.checkLose();
    },

    checkLose: function() {
        $('h4').hide();

        if (this.copy.length === 0 && this.active) {
            this.deactivateSimonBoard();
            this.newRound();

        } else if (!this.active) { // user lost
            if(this.strict)
            {
                this.deactivateSimonBoard();
                this.endGame();
            }
            else
            {
                //                debugger;
                //                alert("here");
                $('h4').show();
                this.deactivateSimonBoard();
                this.copy = this.sequence.slice(0);
                this.animate(this.sequence);
            }
        }
    },

    endGame: function() {
        // notify the user that they lost and change the "round" text to zero
        $('h2[data-action=lose]').show();
        $($('[data-round]').get(1)).text("0");
    },

    activateSimonBoard: function() {
        var that = this;
        $('.simon')
            .on('click', '[data-tile]', function(e) {
            that.registerClick(e);
        })

            .on('mousedown', '[data-tile]', function(){
            $(this).addClass('active');
            that.playSound($(this).data('tile'));
        })

            .on('mouseup', '[data-tile]', function(){
            $(this).removeClass('active');
        });

        $('[data-tile]').addClass('hoverable');
    },

    // prevent user from interacting until sequence is done animating
    deactivateSimonBoard: function() {
        $('.simon')
            .off('click', '[data-tile]')
            .off('mousedown', '[data-tile]')
            .off('mouseup', '[data-tile]');

        $('[data-tile]').removeClass('hoverable');
    },

    animate: function(sequence) {
        var i = 0;
        var that = this;
        interval = setInterval(function() {
            that.playSound(sequence[i]);
            that.lightUp(sequence[i]);

            i++;
            if (i >= sequence.length) {
                clearInterval(interval);
                that.activateSimonBoard();
            }
        }, 600);
    },

    lightUp: function(tile) {
        var $tile = $('[data-tile=' + tile + ']').addClass('lit');
        window.setTimeout(function() {
            $tile.removeClass('lit');
        }, 300);

    },

    playSound: function(tile) {
        var audio = $('<audio autoplay></audio>');
        console.log("tile:" + tile);
        audio.append('<source src="http://s3.amazonaws.com/freecodecamp/simonSound' + tile + '.mp3" type="audio/mp3" />');
        $('[data-action=sound]').html(audio);

    },

    randomNumber: function() {
        // between 1 and 4
        return Math.floor((Math.random()*4)+1);
    }
};	




$(document).ready(function(){
    Simon.init();
    $("button").click(function(){
        Simon.startGame();
    });

    $("#strict").click(function(){
        Simon.strict = !Simon.strict;
    });
});