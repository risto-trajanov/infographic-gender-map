var numbers = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen'];
var numbers_track = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var red = '#ed4992'; //rgb(237, 73, 146)
var blue = '#66dfff'; //rgb(102, 223, 255)

function toggle(id) {
    var blur = document.getElementById('blur');
    blur.classList.toggle('active');
    var popup = document.getElementById(id);
    var color = get_color(id);
    $(popup).css('background-color', color);
    popup.classList.toggle('active');
}

function toggle_pulse(popup){
    var blur = document.getElementById('blur');
    blur.classList.toggle('active');
    var id = popup.id;
    var color = get_color(id);
    $(popup).css('background-color', color);
    popup.classList.toggle('active');
    keep_track_of_posts(id);
}

function toggle_id(elem) {
    toggle(elem.parentNode.id)+
    pin_number();
    pulse_track();
}

function get_color(id) {
    if (numbers.indexOf(id) % 2 == 0) {
        var color = red;
    } else {
        var color = blue;
    }
    return color;
}

function hidePopup(elem) {
    toggle(elem.parentNode.id);
    
}

function next(elem) {
    var id = elem.parentNode.parentNode.id;
    var id_next = numbers[numbers.indexOf(id) + 1];
    keep_track_of_posts(id_next);
    if (id == 'sixteen') {
        id_next = 'one'
    }
    var popup = document.getElementById(id);
    var popup_next = document.getElementById(id_next);
    popup.classList.toggle('active');
    var color = get_color(id_next);
    $(popup_next).css('background-color', color);
    popup_next.classList.toggle('active');
    pulse_track();

}

function back(elem){
    var id = elem.parentNode.parentNode.id;
    var id_back = numbers[numbers.indexOf(id) - 1];
    keep_track_of_posts(id_back);
    if (id == 'one') {
        id_back = 'sixteen'
    }
    var popup = document.getElementById(id);
    var popup_back = document.getElementById(id_back);
    popup.classList.toggle('active');
    var color = get_color(id_back);
    $(popup_back).css('background-color', color);
    popup_back.classList.toggle('active');
    pulse_track();
}

function pulse_track(){
    document.querySelectorAll('.pulse_holder').forEach(e => e.remove());
    var img = document.getElementById('img-main');
    var height = $(img).height();
    var width = $(img).width();
    var img_landscape = document.getElementById('img-main-landscape');
    var height_landscape = $(img_landscape).height();
    var width_landscape = $(img_landscape).width();
    var i;
    var pulse=0;
    for(i = 0; i < numbers_track.length; i++){
        if(numbers_track[i] == 0){
            pulse = i;
            break;
        }
    }
    if(pulse == 0){
        top = height * 0.145;
        left = width * 0.056;
        var $div = $('<div style="height:' + height * 0.1 + 'px" onClick="toggle_pulse(' + "one" + ')" class="pulse_holder area_title"><span  style="height:' + height * 0.21 + 'px" class="pulse_marker"></span></div>')

        $div.css({
            top: top + 'px',
            left: left + 'px',
            position: 'absolute'
        });
        $div.appendTo('#span-helper');
        
        top = height_landscape * 0.145;
        left = width_landscape * 0.041;
        var $div = $('<div style="height:' + height_landscape * 0.1 + 'px" onClick="toggle_pulse(' + "one" + ')" class="pulse_holder area_title"><span  style="height:' + height_landscape * 0.21 + 'px" class="pulse_marker"></span></div>')

        $div.css({
            top: top + 'px',
            left: left + 'px',
            position: 'absolute'
        });
        $div.appendTo('#span-helper-landscape');
    }
    if(pulse == 1){
        top = height * 0.343;
        left = width * 0.055;
        var $div = $('<div style="height:' + height * 0.1 + 'px" onClick="toggle_pulse(' + "two" + ')" class="pulse_holder area_title"><span  style="height:' + height * 1 + 'px" class="pulse_marker"></span></div>')

        $div.css({
            top: top + 'px',
            left: left + 'px',
            position: 'absolute'
        });
        $div.appendTo('#span-helper');
        
        top = height_landscape * 0.35;
        left = width_landscape * 0.125;
        var $div = $('<div style="height:' + height_landscape * 0.1 + 'px" onClick="toggle_pulse(' + "two" + ')" class="pulse_holder area_title"><span  style="height:' + height_landscape * 0.21 + 'px" class="pulse_marker"></span></div>')

        $div.css({
            top: top + 'px',
            left: left + 'px',
            position: 'absolute'
        });
        $div.appendTo('#span-helper-landscape');
    }
    if(pulse == 2){
        var top = height * 0.42;
        var left = width * 0.285;
        var $div = $('<div style="height:' + height * 0.1 + 'px" onClick="toggle_pulse(' + "three" + ')" class="pulse_holder area_title"><span  style="height:' + height * 1 + 'px" class="pulse_marker"></span></div>')

        $div.css({
            top: top + 'px',
            left: left + 'px',
            position: 'absolute'
        });
        $div.appendTo('#span-helper');
        
        top = height_landscape * 0.598;
        left = width_landscape * 0.228;
        var $div = $('<div style="height:' + height_landscape * 0.1 + 'px" onClick="toggle_pulse(' + "three" + ')" class="pulse_holder area_title"><span  style="height:' + height_landscape * 0.21 + 'px" class="pulse_marker"></span></div>')

        $div.css({
            top: top + 'px',
            left: left + 'px',
            position: 'absolute'
        });
        $div.appendTo('#span-helper-landscape');
    }
    if(pulse == 3){
        var top = height * 0.483;
        var left = width * 0.405;
        var $div = $('<div style="height:' + height * 0.1 + 'px" onClick="toggle_pulse(' + "four" + ')" class="pulse_holder area_title"><span  style="height:' + height * 1 + 'px" class="pulse_marker"></span></div>')

        $div.css({
            top: top + 'px',
            left: left + 'px',
            position: 'absolute'
        });
        $div.appendTo('#span-helper');
        
        top = height_landscape * 0.199;
        left = width_landscape * 0.3487;
        var $div = $('<div style="height:' + height_landscape * 0.1 + 'px" onClick="toggle_pulse(' + "four" + ')" class="pulse_holder area_title"><span  style="height:' + height_landscape * 0.21 + 'px" class="pulse_marker"></span></div>')

        $div.css({
            top: top + 'px',
            left: left + 'px',
            position: 'absolute'
        });
        $div.appendTo('#span-helper-landscape');
    }
    if(pulse == 4){
        var top = height * 0.076;
        var left = width * 0.48;
        var $div = $('<div style="height:' + height * 0.1 + 'px" onClick="toggle_pulse(' + "five" + ')" class="pulse_holder area_title"><span  style="height:' + height * 1 + 'px" class="pulse_marker"></span></div>')

        $div.css({
            top: top + 'px',
            left: left + 'px',
            position: 'absolute'
        });
        $div.appendTo('#span-helper');
        
        top = height_landscape * 0.638;
        left = width_landscape * 0.331;
        var $div = $('<div style="height:' + height_landscape * 0.1 + 'px" onClick="toggle_pulse(' + "five" + ')" class="pulse_holder area_title"><span  style="height:' + height_landscape * 0.21 + 'px" class="pulse_marker"></span></div>')

        $div.css({
            top: top + 'px',
            left: left + 'px',
            position: 'absolute'
        });
        $div.appendTo('#span-helper-landscape');
    }
    if(pulse == 5){
        var top = height * 0.361;
        var left = width * 0.62;
        var $div = $('<div style="height:' + height * 0.1 + 'px" onClick="toggle_pulse(' + "six" + ')" class="pulse_holder area_title"><span  style="height:' + height * 1 + 'px" class="pulse_marker"></span></div>')

        $div.css({
            top: top + 'px',
            left: left + 'px',
            position: 'absolute'
        });
        $div.appendTo('#span-helper');
        
        top = height_landscape * 0.309;
        left = width_landscape * 0.481;
        var $div = $('<div style="height:' + height_landscape * 0.1 + 'px" onClick="toggle_pulse(' + "six" + ')" class="pulse_holder area_title"><span  style="height:' + height_landscape * 0.21 + 'px" class="pulse_marker"></span></div>')

        $div.css({
            top: top + 'px',
            left: left + 'px',
            position: 'absolute'
        });
        $div.appendTo('#span-helper-landscape');
        
        
    }
    if(pulse == 6){
        var top = height * 0.075;
        var left = width * 0.695;
        var $div = $('<div style="height:' + height * 0.1 + 'px" onClick="toggle_pulse(' + "seven" + ')" class="pulse_holder area_title"><span  style="height:' + height * 1 + 'px" class="pulse_marker"></span></div>')

        $div.css({
            top: top + 'px',
            left: left + 'px',
            position: 'absolute'
        });
        $div.appendTo('#span-helper');
        
        top = height_landscape * 0.313;
        left = width_landscape * 0.5822;
        var $div = $('<div style="height:' + height_landscape * 0.1 + 'px" onClick="toggle_pulse(' + "seven" + ')" class="pulse_holder area_title"><span  style="height:' + height_landscape * 0.21 + 'px" class="pulse_marker"></span></div>')

        $div.css({
            top: top + 'px',
            left: left + 'px',
            position: 'absolute'
        });
        $div.appendTo('#span-helper-landscape');
    }
    if(pulse == 7){
        var top = height * 0.11;
        var left = width * 0.857;
        var $div = $('<div style="height:' + height * 0.1 + 'px" onClick="toggle_pulse(' + "eight" + ')" class="pulse_holder area_title"><span  style="height:' + height * 1 + 'px" class="pulse_marker"></span></div>')

        $div.css({
            top: top + 'px',
            left: left + 'px',
            position: 'absolute'
        });
        $div.appendTo('#span-helper');
        
        top = height_landscape * 0.167;
        left = width_landscape * 0.682;
        var $div = $('<div style="height:' + height_landscape * 0.1 + 'px" onClick="toggle_pulse(' + "eight" + ')" class="pulse_holder area_title"><span  style="height:' + height_landscape * 0.21 + 'px" class="pulse_marker"></span></div>')

        $div.css({
            top: top + 'px',
            left: left + 'px',
            position: 'absolute'
        });
        $div.appendTo('#span-helper-landscape');
    }
    if(pulse == 8){
        var top = height * 0.246;
        var left = width * 0.98;
        var $div = $('<div style="height:' + height * 0.1 + 'px" onClick="toggle_pulse(' + "nine" + ')" class="pulse_holder area_title"><span  style="height:' + height * 1 + 'px" class="pulse_marker"></span></div>')

        $div.css({
            top: top + 'px',
            left: left + 'px',
            position: 'absolute'
        });
        $div.appendTo('#span-helper');
        
        top = height_landscape * 0.12;
        left = width_landscape * 0.8445;
        var $div = $('<div style="height:' + height_landscape * 0.1 + 'px" onClick="toggle_pulse(' + "nine" + ')" class="pulse_holder area_title"><span  style="height:' + height_landscape * 0.21 + 'px" class="pulse_marker"></span></div>')

        $div.css({
            top: top + 'px',
            left: left + 'px',
            position: 'absolute'
        });
        $div.appendTo('#span-helper-landscape');
    }
    if(pulse == 9){
        var top = height * 0.465;
        var left = width * 0.915;
        var $div = $('<div style="height:' + height * 0.1 + 'px" onClick="toggle_pulse(' + "ten" + ')" class="pulse_holder area_title"><span  style="height:' + height * 1 + 'px" class="pulse_marker"></span></div>')

        $div.css({
            top: top + 'px',
            left: left + 'px',
            position: 'absolute'
        });
        $div.appendTo('#span-helper');
        
        top = height_landscape * 0.288;
        left = width_landscape * 0.9825;
        var $div = $('<div style="height:' + height_landscape * 0.1 + 'px" onClick="toggle_pulse(' + "ten" + ')" class="pulse_holder area_title"><span  style="height:' + height_landscape * 0.21 + 'px" class="pulse_marker"></span></div>')

        $div.css({
            top: top + 'px',
            left: left + 'px',
            position: 'absolute'
        });
        $div.appendTo('#span-helper-landscape');
    }
    if(pulse == 10){
        var top = height * 0.555;
        var left = width * 0.85;
        var $div = $('<div style="height:' + height * 0.1 + 'px" onClick="toggle_pulse(' + "eleven" + ')" class="pulse_holder area_title"><span  style="height:' + height * 1 + 'px" class="pulse_marker"></span></div>')

        $div.css({
            top: top + 'px',
            left: left + 'px',
            position: 'absolute'
        });
        $div.appendTo('#span-helper');
        
        top = height_landscape * 0.6;
        left = width_landscape * 0.951;
        var $div = $('<div style="height:' + height_landscape * 0.1 + 'px" onClick="toggle_pulse(' + "eleven" + ')" class="pulse_holder area_title"><span  style="height:' + height_landscape * 0.21 + 'px" class="pulse_marker"></span></div>')

        $div.css({
            top: top + 'px',
            left: left + 'px',
            position: 'absolute'
        });
        $div.appendTo('#span-helper-landscape');
    }
    if(pulse == 11){
        var top = height * 0.665;
        var left = width * 0.888;
        var $div = $('<div style="height:' + height * 0.1 + 'px" onClick="toggle_pulse(' + "twelve" + ')" class="pulse_holder area_title"><span  style="height:' + height * 1 + 'px" class="pulse_marker"></span></div>')

        $div.css({
            top: top + 'px',
            left: left + 'px',
            position: 'absolute'
        });
        $div.appendTo('#span-helper');
        
        top = height_landscape * 0.779;
        left = width_landscape * 0.869;
        var $div = $('<div style="height:' + height_landscape * 0.1 + 'px" onClick="toggle_pulse(' + "twelve" + ')" class="pulse_holder area_title"><span  style="height:' + height_landscape * 0.21 + 'px" class="pulse_marker"></span></div>')

        $div.css({
            top: top + 'px',
            left: left + 'px',
            position: 'absolute'
        });
        $div.appendTo('#span-helper-landscape');
    }
    if(pulse == 12){
        var top = height * 0.775;
        var left = width * 0.705;
        var $div = $('<div style="height:' + height * 0.1 + 'px" onClick="toggle_pulse(' + "thirteen" + ')" class="pulse_holder area_title"><span  style="height:' + height * 1 + 'px" class="pulse_marker"></span></div>')

        $div.css({
            top: top + 'px',
            left: left + 'px',
            position: 'absolute'
        });
        $div.appendTo('#span-helper');
        
        top = height_landscape * 0.866;
        left = width_landscape * 0.713;
        var $div = $('<div style="height:' + height_landscape * 0.1 + 'px" onClick="toggle_pulse(' + "thirteen" + ')" class="pulse_holder area_title"><span  style="height:' + height_landscape * 0.21 + 'px" class="pulse_marker"></span></div>')

        $div.css({
            top: top + 'px',
            left: left + 'px',
            position: 'absolute'
        });
        $div.appendTo('#span-helper-landscape');
    }
    if(pulse == 13){
        var top = height * 0.854;
        var left = width * 0.572;
        var $div = $('<div style="height:' + height * 0.1 + 'px" onClick="toggle_pulse(' + "fourteen" + ')" class="pulse_holder area_title"><span  style="height:' + height * 1 + 'px" class="pulse_marker"></span></div>')

        $div.css({
            top: top + 'px',
            left: left + 'px',
            position: 'absolute'
        });
        $div.appendTo('#span-helper');
        
        top = height_landscape * 0.9179;
        left = width_landscape * 0.593;
        var $div = $('<div style="height:' + height_landscape * 0.1 + 'px" onClick="toggle_pulse(' + "fourteen" + ')" class="pulse_holder area_title"><span  style="height:' + height_landscape * 0.21 + 'px" class="pulse_marker"></span></div>')

        $div.css({
            top: top + 'px',
            left: left + 'px',
            position: 'absolute'
        });
        $div.appendTo('#span-helper-landscape');
    }
    if(pulse == 14){
        var top = height * 0.925;
        var left = width * 0.433;
        var $div = $('<div style="height:' + height * 0.1 + 'px" onClick="toggle_pulse(' + "fifteen" + ')" class="pulse_holder area_title"><span  style="height:' + height * 1 + 'px" class="pulse_marker"></span></div>')

        $div.css({
            top: top + 'px',
            left: left + 'px',
            position: 'absolute'
        });
        $div.appendTo('#span-helper');
        
        top = height_landscape * 0.917;
        left = width_landscape * 0.521;
        var $div = $('<div style="height:' + height_landscape * 0.1 + 'px" onClick="toggle_pulse(' + "fifteen" + ')" class="pulse_holder area_title"><span  style="height:' + height_landscape * 0.21 + 'px" class="pulse_marker"></span></div>')

        $div.css({
            top: top + 'px',
            left: left + 'px',
            position: 'absolute'
        });
        $div.appendTo('#span-helper-landscape');
    }
    if(pulse == 15){
        var top = height * 0.838;
        var left = width * 0.129;
        var $div = $('<div style="height:' + height * 0.1 + 'px" onClick="toggle_pulse(' + "sixteen" + ')" class="pulse_holder area_title"><span  style="height:' + height * 1 + 'px" class="pulse_marker"></span></div>')

        $div.css({
            top: top + 'px',
            left: left + 'px',
            position: 'absolute'
        });
        $div.appendTo('#span-helper');
        
        top = height_landscape * 0.9;
        left = width_landscape * 0.284;
        var $div = $('<div style="height:' + height_landscape * 0.1 + 'px" onClick="toggle_pulse(' + "sixteen" + ')" class="pulse_holder area_title"><span  style="height:' + height_landscape * 0.21 + 'px" class="pulse_marker"></span></div>')

        $div.css({
            top: top + 'px',
            left: left + 'px',
            position: 'absolute'
        });
        $div.appendTo('#span-helper-landscape');
    }
}

function start() {
    
    $('.area-popup').each(function () {

        var img = document.getElementById('img-main');
        var height = $(img).height();
        var width = $(img).width();
        var title = $(this).attr("title-data");
        var number = $(this)[0].id;
        
        if (number == 'one-area') {
            top = height * 0.01;
            left = width * 0.02;
            var $span = $('<span style="font-size:' + height * 0.033 + 'px; color:' + blue + '" class="area_title">START THE JOURNEY HERE</span>');
            $span.css({
                top: top + 'px',
                left: left + 'px',
                position: 'absolute'
            });
            $span.appendTo('#main');
            top = height * 0.1;
            left = width * 0.25;
            var $span = $('<span style="font-size:' + height * 0.02 + 'px" class="area_title">' + title + '</span>');

            $span.css({
                top: top + 'px',
                left: left + 'px',
                position: 'absolute'
            });
            $span.appendTo('#main');
            
            top = height * 0.12;
            left = width * 0.14;
            var $div = $('<div class="pin bounce area_title"></div>')
            
            $div.css({
                top: top + 'px',
                left: left + 'px',
                position: 'absolute'
            });
            $div.appendTo('#span-helper');
            

        }
        if (number == 'two-area') {
            top = height * 0.396;
            left = width * 0.02;
            var $span = $('<span style="font-size:' + height * 0.017 + 'px" class="area_title">' + title + '</span>');

            $span.css({
                top: top + 'px',
                left: left + 'px',
                position: 'absolute'
            });
            $span.appendTo('#main');
            
        }
        if (number == 'three-area') {
            top = height * 0.475;
            left = width * 0.23;
            var $span = $('<span style="font-size:' + height * 0.02 + 'px" class="area_title">' + title + '</span>');

            $span.css({
                top: top + 'px',
                left: left + 'px',
                position: 'absolute'
            });
            $span.appendTo('#main');
        }
        if (number == 'four-area') {
            top = height * 0.45;
            left = width * 0.47;
            var $span = $('<span style="font-size:' + height * 0.02 + 'px" class="area_title">' + title + '</span>');

            $span.css({
                top: top + 'px',
                left: left + 'px',
                position: 'absolute'
            });
            $span.appendTo('#main');
        }
        if (number == 'five-area') {
            top = height * 0.11;
            left = width * 0.51;
            var $span = $('<span style="font-size:' + height * 0.019 + 'px" class="area_title">' + title + '</span>');

            $span.css({
                top: top + 'px',
                left: left + 'px',
                position: 'absolute'
            });
            $span.appendTo('#main');
        }
        if (number == 'six-area') {
            top = height * 0.34;
            left = width * 0.67;
            var $span = $('<span style="font-size:' + height * 0.02 + 'px" class="area_title">' + title + '</span>');

            $span.css({
                top: top + 'px',
                left: left + 'px',
                position: 'absolute'
            });
            $span.appendTo('#main');
        }
        if (number == 'seven-area') {
            top = height * 0.0;
            left = width * 0.55;
            var $span = $('<span style="font-size:' + height * 0.02 + 'px" class="area_title">' + title + '</span>');

            $span.css({
                top: top + 'px',
                left: left + 'px',
                position: 'absolute'
            });
            $span.appendTo('#main');
        }
        if (number == 'eight-area') {
            top = height * 0.0;
            left = width * 0.75;
            var $span = $('<span style="font-size:' + height * 0.0175 + 'px" class="area_title">' + title + '</span>');

            $span.css({
                top: top + 'px',
                left: left + 'px',
                position: 'absolute'
            });
            $span.appendTo('#main');
        }
        if (number == 'nine-area') {
            top = height * 0.03;
            left = width * 0.93;
            var $span = $('<span style="font-size:' + height * 0.017 + 'px" class="area_title">' + title + '</span>');

            $span.css({
                top: top + 'px',
                left: left + 'px',
                position: 'absolute'
            });
            $span.appendTo('#main');
        }
        if (number == 'ten-area') {
            top = height * 0.44;
            left = width * 0.96;
            var $span = $('<span style="font-size:' + height * 0.0175 + 'px" class="area_title">' + title + '</span>');

            $span.css({
                top: top + 'px',
                left: left + 'px',
                position: 'absolute'
            });
            $span.appendTo('#main');
        }
        if (number == 'eleven-area') {
            top = height * 0.53;
            left = width * 0.895;
            var $span = $('<span style="font-size:' + height * 0.0175 + 'px" class="area_title">' + title + '</span>');

            $span.css({
                top: top + 'px',
                left: left + 'px',
                position: 'absolute'
            });
            $span.appendTo('#main');
        }
        if (number == 'twelve-area') {
            top = height * 0.72;
            left = width * 0.87;
            var $span = $('<span style="font-size:' + height * 0.018 + 'px" class="area_title">' + title + '</span>');

            $span.css({
                top: top + 'px',
                left: left + 'px',
                position: 'absolute'
            });
            $span.appendTo('#main');
        }
        if (number == 'thirteen-area') {
            top = height * 0.83;
            left = width * 0.68;
            var $span = $('<span style="font-size:' + height * 0.02 + 'px" class="area_title">' + title + '</span>');

            $span.css({
                top: top + 'px',
                left: left + 'px',
                position: 'absolute'
            });
            $span.appendTo('#main');
        }
        if (number == 'fourteen-area') {
            top = height * 0.77;
            left = width * 0.53;
            var $span = $('<span style="font-size:' + height * 0.02 + 'px" class="area_title">' + title + '</span>');

            $span.css({
                top: top + 'px',
                left: left + 'px',
                position: 'absolute'
            });
            $span.appendTo('#main');
        }
        if (number == 'fifteen-area') {
            top = height * 0.91;
            left = width * 0.48;
            var $span = $('<span style="font-size:' + height * 0.02 + 'px" class="area_title">' + title + '</span>');

            $span.css({
                top: top + 'px',
                left: left + 'px',
                position: 'absolute'
            });
            $span.appendTo('#main');
        }
        if (number == 'sixteen-area') {
            top = height * 0.68;
            left = width * 0.075;
            var $span = $('<span style="font-size:' + height * 0.033 + 'px; color:' + red + '" class="area_title">FINISH LINE</span>');
            $span.css({
                top: top + 'px',
                left: left + 'px',
                position: 'absolute'
            });
            $span.appendTo('#main');
            top = height * 0.91;
            left = width * 0.08;
            var $span = $('<span style="font-size:' + height * 0.02 + 'px;" class="area_title">' + title + '</span>');

            $span.css({
                top: top + 'px',
                left: left + 'px',
                position: 'absolute'
            });
            $span.appendTo('#main');
        }
    });
    
    var pulse = 0;
    if(pulse == 15){
        var top = height * 0.825;
        var left = width * 0.28;
        var $div = $('<div class="pin bounce area_title red_background"></div>')

        $div.css({
            top: top + 'px',
            left: left + 'px',
            position: 'absolute'
        });
        $div.appendTo('#span-helper');
    }
   
}

function start_landscape(){
    $('.area-popup').each(function () {

        var title = $(this).attr("title-data");
        var coords = $(this).attr('coords');
        var coorA = coords.split(',');
        var left = parseInt(coorA[0]);
        var top = parseInt(coorA[1]);
        var number = $(this)[0].id;
        var img = document.getElementById('img-main-landscape');
        var height = $(img).height();
        var width = $(img).width();
        if (number == 'one-area-landscape') {
            top = 0;
            left = width * 0.02;
            var $span = $('<span style="font-size:' + height * 0.04 + 'px; color:' + blue + '" class="area_title">START THE JOURNEY HERE</span>');
            $span.css({
                top: top + 'px',
                left: left + 'px',
                position: 'absolute'
            });
            $span.appendTo('#main-landscape');
            top = height * 0.1;
            left = width * 0.195;
            var $span = $('<span style="font-size:' + height * 0.028 + 'px" class="area_title">' + title + '</span>');

            $span.css({
                top: top + 'px',
                left: left + 'px',
                position: 'absolute'
            });
            $span.appendTo('#main-landscape');
            
            top = height * 0.12;
            left = width * 0.09;
            var $div = $('<div class="pin bounce area_title"></div>')
            
            $div.css({
                top: top + 'px',
                left: left + 'px',
                position: 'absolute'
            });
            $div.appendTo('#span-helper-landscape');

        }
        if (number == 'two-area-landscape') {
            top = height * 0.37;
            left = width * 0.03;
            var $span = $('<span style="font-size:' + height * 0.024 + 'px" class="area_title">' + title + '</span>');

            $span.css({
                top: top + 'px',
                left: left + 'px',
                position: 'absolute'
            });
            $span.appendTo('#main-landscape');
            
        }
        if (number == 'three-area-landscape') {
            top = height * 0.53;
            left = width * 0.126;
            var $span = $('<span style="font-size:' + height * 0.026 + 'px" class="area_title">' + title + '</span>');

            $span.css({
                top: top + 'px',
                left: left + 'px',
                position: 'absolute'
            });
            $span.appendTo('#main-landscape');
        }
        if (number == 'four-area-landscape') {
            top = height * 0.05;
            left = width * 0.336;
            var $span = $('<span style="font-size:' + height * 0.027 + 'px" class="area_title">' + title + '</span>');

            $span.css({
                top: top + 'px',
                left: left + 'px',
                position: 'absolute'
            });
            $span.appendTo('#main-landscape');
        }
        if (number == 'five-area-landscape') {
            top = height * 0.65;
            left = width * 0.25;
            var $span = $('<span style="font-size:' + height * 0.025 + 'px" class="area_title">' + title + '</span>');

            $span.css({
                top: top + 'px',
                left: left + 'px',
                position: 'absolute'
            });
            $span.appendTo('#main-landscape');
        }
        if (number == 'six-area-landscape') {
            top = height * 0.168;
            left = width * 0.45;
            var $span = $('<span style="font-size:' + height * 0.025 + 'px" class="area_title">' + title + '</span>');

            $span.css({
                top: top + 'px',
                left: left + 'px',
                position: 'absolute'
            });
            $span.appendTo('#main-landscape');
        }
        if (number == 'seven-area-landscape') {
            top = height * 0.21;
            left = width * 0.57;
            var $span = $('<span style="font-size:' + height * 0.026 + 'px" class="area_title">' + title + '</span>');

            $span.css({
                top: top + 'px',
                left: left + 'px',
                position: 'absolute'
            });
            $span.appendTo('#main-landscape');
        }
        if (number == 'eight-area-landscape') {
            top = height * 0.02;
            left = width * 0.605;
            var $span = $('<span style="font-size:' + height * 0.025 + 'px" class="area_title">' + title + '</span>');

            $span.css({
                top: top + 'px',
                left: left + 'px',
                position: 'absolute'
            });
            $span.appendTo('#main-landscape');
        }
        if (number == 'nine-area-landscape') {
            top = height * 0;
            left = width * 0.745;
            var $span = $('<span style="font-size:' + height * 0.024 + 'px" class="area_title">' + title + '</span>');

            $span.css({
                top: top + 'px',
                left: left + 'px',
                position: 'absolute'
            });
            $span.appendTo('#main-landscape');
        }
        if (number == 'ten-area-landscape') {
            top = height * 0.21;
            left = width * 0.87;
            var $span = $('<span style="font-size:' + height * 0.025 + 'px" class="area_title">' + title + '</span>');

            $span.css({
                top: top + 'px',
                left: left + 'px',
                position: 'absolute'
            });
            $span.appendTo('#main-landscape');
        }
        if (number == 'eleven-area-landscape') {
            top = height * 0.625;
            left = width * 0.895;
            var $span = $('<span style="font-size:' + height * 0.025 + 'px" class="area_title">' + title + '</span>');

            $span.css({
                top: top + 'px',
                left: left + 'px',
                position: 'absolute'
            });
            $span.appendTo('#main-landscape');
        }
        if (number == 'twelve-area-landscape') {
            top = height * 0.83;
            left = width * 0.86;
            var $span = $('<span style="font-size:' + height * 0.025 + 'px" class="area_title">' + title + '</span>');

            $span.css({
                top: top + 'px',
                left: left + 'px',
                position: 'absolute'
            });
            $span.appendTo('#main-landscape');
        }
        if (number == 'thirteen-area-landscape') {
            top = height * 0.92;
            left = width * 0.68;
            var $span = $('<span style="font-size:' + height * 0.025 + 'px" class="area_title">' + title + '</span>');

            $span.css({
                top: top + 'px',
                left: left + 'px',
                position: 'absolute'
            });
            $span.appendTo('#main-landscape');
        }
        if (number == 'fourteen-area-landscape') {
            top = height * 0.97;
            left = width * 0.578;
            var $span = $('<span style="font-size:' + height * 0.025 + 'px" class="area_title">' + title + '</span>');

            $span.css({
                top: top + 'px',
                left: left + 'px',
                position: 'absolute'
            });
            $span.appendTo('#main-landscape');
        }
        if (number == 'fifteen-area-landscape') {
            top = height * 0.92;
            left = width * 0.445;
            var $span = $('<span style="font-size:' + height * 0.024 + 'px" class="area_title">' + title + '</span>');

            $span.css({
                top: top + 'px',
                left: left + 'px',
                position: 'absolute'
            });
            $span.appendTo('#main-landscape');
        }
        if (number == 'sixteen-area-landscape') {
            top = height * 0.79;
            left = width * 0.182;
            var $span = $('<span style="font-size:' + height * 0.044 + 'px; color:' + red + '" class="area_title">FINISH LINE</span>');
            $span.css({
                top: top + 'px',
                left: left + 'px',
                position: 'absolute'
            });
            $span.appendTo('#main-landscape');
            top = height * 0.925;
            left = width * 0.165;
            var $span = $('<span style="font-size:' + height * 0.025 + 'px;" class="area_title">' + title + '</span>');

            $span.css({
                top: top + 'px',
                left: left + 'px',
                position: 'absolute'
            });
            $span.appendTo('#main-landscape');
        }
    });
    var img = document.getElementById('ying_yang');
    var height = $(img).height();
    var width = $(img).width();

    top_c = height * 0.4;
    left = width * 0.1;
    
    var $span = $('<span style="font-size:' + width * 0.04 + 'px; color:black;" class="area_title">Gender policies<br> are Climate Resilient</span>');
    
    $span.css({
        top: top_c + 'px',
        right: left + 'px',
        position: 'absolute'
    });
    $span.appendTo('#ying_yang_div');
    
    top_c = height * 0.2;
    left = width * 0.1;
    
    var $span = $('<span style="font-size:' + width * 0.04 + 'px; color:black;" class="area_title">Climate Policies<br> are Gender<br> Responsive </span>');
    
    $span.css({
        top: top_c + 'px',
        left: left + 'px',
        position: 'absolute'
    });
    $span.appendTo('#ying_yang_div');
    
    top_c = height * 1;
    left = width * 0.4;
    
    var $span = $('<span style="font-size:' + width * 0.03 + 'px; color:black;" class="area_title">The Macedonian enhanced<br> Nationally Determined Contributions<br> addresses gender dimensions </span>');
    
    $span.css({
        top: top_c + 'px',
        left: left + 'px',
        position: 'absolute'
    });
    $span.appendTo('#ying_yang_div');

}

function keep_track_of_posts(id){
    var index = numbers.indexOf(id);
    numbers_track[index] = 1;
}

function pin_number(){
    document.querySelectorAll('.pin').forEach(e => e.remove());
    var img = document.getElementById('img-main');
    var height = $(img).height();
    var width = $(img).width();
    if(numbers_track[0] == 1){
        top = height * 0.12;
        left = width * 0.14;
        var $div = $('<div class="pin bounce area_title"></div>')

        $div.css({
            top: top + 'px',
            left: left + 'px',
            position: 'absolute'
        });
        $div.appendTo('#span-helper');
    }
    if(numbers_track[1] == 1){
        var top = height * 0.32;
        var left = width * 0.13;
        var $div = $('<div class="pin bounce area_title red_background"></div>')

        $div.css({
            top: top + 'px',
            left: left + 'px',
            position: 'absolute'
        });
        $div.appendTo('#span-helper');
    }
    if(numbers_track[2] == 1){
        var top = height * 0.45;
        var left = width * 0.35;
        var $div = $('<div class="pin bounce area_title"></div>')

        $div.css({
            top: top + 'px',
            left: left + 'px',
            position: 'absolute'
        });
        $div.appendTo('#span-helper');
    }
    if(numbers_track[3] == 1){
        var top = height * 0.42;
        var left = width * 0.5;
        var $div = $('<div class="pin bounce area_title red_background"></div>')

        $div.css({
            top: top + 'px',
            left: left + 'px',
            position: 'absolute'
        });
        $div.appendTo('#span-helper');
    }
    if(numbers_track[4] == 1){
        var top = height * 0.025;
        var left = width * 0.491;
        var $div = $('<div class="pin bounce area_title"></div>')

        $div.css({
            top: top + 'px',
            left: left + 'px',
            position: 'absolute'
        });
        $div.appendTo('#span-helper');
    }
    if(numbers_track[5] == 1){
        var top = height * 0.32;
        var left = width * 0.74;
        var $div = $('<div class="pin bounce area_title red_background"></div>')

        $div.css({
            top: top + 'px',
            left: left + 'px',
            position: 'absolute'
        });
        $div.appendTo('#span-helper');
    }
    if(numbers_track[6] == 1){
        var top = height * 0.01;
        var left = width * 0.72;
        var $div = $('<div class="pin bounce area_title"></div>')

        $div.css({
            top: top + 'px',
            left: left + 'px',
            position: 'absolute'
        });
        $div.appendTo('#span-helper');
    }
    if(numbers_track[7] == 1){
        var top = height * 0.18;
        var left = width * 0.82;
        var $div = $('<div class="pin bounce area_title red_background"></div>')

        $div.css({
            top: top + 'px',
            left: left + 'px',
            position: 'absolute'
        });
        $div.appendTo('#span-helper');
    }
    if(numbers_track[8] == 1){
        var top = height * 0.28;
        var left = width * 0.94;
        var $div = $('<div class="pin bounce area_title"></div>')

        $div.css({
            top: top + 'px',
            left: left + 'px',
            position: 'absolute'
        });
        $div.appendTo('#span-helper');
    }
    if(numbers_track[9] == 1){
        var top = height * 0.42;
        var left = width * 0.9;
        var $div = $('<div class="pin bounce area_title red_background"></div>')

        $div.css({
            top: top + 'px',
            left: left + 'px',
            position: 'absolute'
        });
        $div.appendTo('#span-helper');
    }
    if(numbers_track[10] == 1){
        var top = height * 0.53;
        var left = width * 0.8;
        var $div = $('<div class="pin bounce area_title"></div>')

        $div.css({
            top: top + 'px',
            left: left + 'px',
            position: 'absolute'
        });
        $div.appendTo('#span-helper');
    }
    if(numbers_track[11] == 1){
        var top = height * 0.69;
        var left = width * 0.9529;
        var $div = $('<div class="pin bounce area_title red_background"></div>')

        $div.css({
            top: top + 'px',
            left: left + 'px',
            position: 'absolute'
        });
        $div.appendTo('#span-helper');
    }
    if(numbers_track[12] == 1){
        var top = height * 0.8;
        var left = width * 0.79;
        var $div = $('<div class="pin bounce area_title"></div>')

        $div.css({
            top: top + 'px',
            left: left + 'px',
            position: 'absolute'
        });
        $div.appendTo('#span-helper');
    }
    if(numbers_track[13] == 1){
        var top = height * 0.59;
        var left = width * 0.522;
        var $div = $('<div class="pin bounce area_title red_background"></div>')

        $div.css({
            top: top + 'px',
            left: left + 'px',
            position: 'absolute'
        });
        $div.appendTo('#span-helper');
    }
    if(numbers_track[14] == 1){
        var top = height * 0.71;
        var left = width * 0.422;
        var $div = $('<div class="pin bounce area_title"></div>')

        $div.css({
            top: top + 'px',
            left: left + 'px',
            position: 'absolute'
        });
        $div.appendTo('#span-helper');
    }
    if(numbers_track[15] == 1){
        var top = height * 0.8;
        var left = width * 0.2;
        var $div = $('<div class="pin bounce area_title red_background"></div>')

        $div.css({
            top: top + 'px',
            left: left + 'px',
            position: 'absolute'
        });
        $div.appendTo('#span-helper');
    }
    
   
    
    var img = document.getElementById('img-main-landscape');
    var height = $(img).height();
    var width = $(img).width();
    if(numbers_track[0] == 1){
        top = height * 0.12;
        left = width * 0.09;
        var $div = $('<div class="pin bounce area_title"></div>')

        $div.css({
            top: top + 'px',
            left: left + 'px',
            position: 'absolute'
        });
        $div.appendTo('#span-helper-landscape');
    }
    if(numbers_track[1] == 1){
        var top = height * 0.33;
        var left = width * 0.1;
        var $div = $('<div class="pin bounce area_title red_background"></div>')

        $div.css({
            top: top + 'px',
            left: left + 'px',
            position: 'absolute'
        });
        $div.appendTo('#span-helper-landscape');
    }
    if(numbers_track[2] == 1){
        var top = height * 0.5;
        var left = width * 0.2;
        var $div = $('<div class="pin bounce area_title"></div>')

        $div.css({
            top: top + 'px',
            left: left + 'px',
            position: 'absolute'
        });
        $div.appendTo('#span-helper-landscape');
    }
    if(numbers_track[3] == 1){
        var top = height * 0.25;
        var left = width * 0.389;
        var $div = $('<div class="pin bounce area_title red_background"></div>')

        $div.css({
            top: top + 'px',
            left: left + 'px',
            position: 'absolute'
        });
        $div.appendTo('#span-helper-landscape');
    }
    if(numbers_track[4] == 1){
        var top = height * 0.58;
        var left = width * 0.34;
        var $div = $('<div class="pin bounce area_title"></div>')

        $div.css({
            top: top + 'px',
            left: left + 'px',
            position: 'absolute'
        });
        $div.appendTo('#span-helper-landscape');
    }
    if(numbers_track[5] == 1){
        var top = height * 0.38;
        var left = width * 0.52;
        var $div = $('<div class="pin bounce area_title red_background"></div>')

        $div.css({
            top: top + 'px',
            left: left + 'px',
            position: 'absolute'
        });
        $div.appendTo('#span-helper-landscape');
    }
    if(numbers_track[6] == 1){
        var top = height * 0.34;
        var left = width * 0.63;
        var $div = $('<div class="pin bounce area_title"></div>')

        $div.css({
            top: top + 'px',
            left: left + 'px',
            position: 'absolute'
        });
        $div.appendTo('#span-helper-landscape');
    }
    if(numbers_track[7] == 1){
        var top = height * 0.215;
        var left = width * 0.72;
        var $div = $('<div class="pin bounce area_title red_background"></div>')

        $div.css({
            top: top + 'px',
            left: left + 'px',
            position: 'absolute'
        });
        $div.appendTo('#span-helper-landscape');
    }
    if(numbers_track[8] == 1){
        var top = height * 0.13;
        var left = width * 0.82;
        var $div = $('<div class="pin bounce area_title"></div>')

        $div.css({
            top: top + 'px',
            left: left + 'px',
            position: 'absolute'
        });
        $div.appendTo('#span-helper-landscape');
    }
    if(numbers_track[9] == 1){
        var top = height * 0.18;
        var left = width * 0.99;
        var $div = $('<div class="pin bounce area_title red_background"></div>')

        $div.css({
            top: top + 'px',
            left: left + 'px',
            position: 'absolute'
        });
        $div.appendTo('#span-helper-landscape');
    }
    if(numbers_track[10] == 1){
        var top = height * 0.58;
        var left = width * 0.92;
        var $div = $('<div class="pin bounce area_title"></div>')

        $div.css({
            top: top + 'px',
            left: left + 'px',
            position: 'absolute'
        });
        $div.appendTo('#span-helper-landscape');
    }
    if(numbers_track[11] == 1){
        var top = height * 0.64;
        var left = width * 0.79;
        var $div = $('<div class="pin bounce area_title red_background"></div>')

        $div.css({
            top: top + 'px',
            left: left + 'px',
            position: 'absolute'
        });
        $div.appendTo('#span-helper-landscape');
    }
    if(numbers_track[12] == 1){
        var top = height * 0.88;
        var left = width * 0.69;
        var $div = $('<div class="pin bounce area_title"></div>')

        $div.css({
            top: top + 'px',
            left: left + 'px',
            position: 'absolute'
        });
        $div.appendTo('#span-helper-landscape');
    }
    if(numbers_track[13] == 1){
        var top = height * 0.65;
        var left = width * 0.6;
        var $div = $('<div class="pin bounce area_title red_background"></div>')

        $div.css({
            top: top + 'px',
            left: left + 'px',
            position: 'absolute'
        });
        $div.appendTo('#span-helper-landscape');
    }
    if(numbers_track[14] == 1){
        var top = height * 0.67;
        var left = width * 0.5;
        var $div = $('<div class="pin bounce area_title"></div>')

        $div.css({
            top: top + 'px',
            left: left + 'px',
            position: 'absolute'
        });
        $div.appendTo('#span-helper-landscape');
    }
    if(numbers_track[15] == 1){
        var top = height * 0.87;
        var left = width * 0.335;
        var $div = $('<div class="pin bounce area_title red_background"></div>')

        $div.css({
            top: top + 'px',
            left: left + 'px',
            position: 'absolute'
        });
        $div.appendTo('#span-helper-landscape');
    }
    
}

function detectMob() {
    return ( ( window.innerWidth <= 800 ) && ( window.innerHeight <= 600 ) );
}

function main_obj(scren_width, screen_height){
    var main = document.getElementById('main');
    var main_landscape = document.getElementById('main-landscape');
    var proportion = scren_width/screen_height;
    if(screen_height <= 600 && scren_width <= 800){
        main_landscape.style.display = "none";
        main.style.display = "table";
    }
    else if(scren_width > 970 || (proportion >= 0.95 && proportion <= 1.05)){
        main_landscape.style.display = "table";
        main_landscape.style.paddingRight = "2vw";
        main.style.display = "none";
    } 
    else {
        main_landscape.style.display = "none";
        main.style.display = "table"; 
    }
    
    
}


$(document).ready(function () {
    $('map').imageMapResize();
    var screen_width = window.innerWidth;
    var screen_height = window.innerHeight;
    main_obj(screen_width, screen_height);
    $('.area-popup').on('click', function (e) {
        e.preventDefault();
        var id_area;
        id_area = e.target.id;
        var id = id_area.split('-')[0];
        keep_track_of_posts(id);
        toggle(id);
    });

});

$(window).load(function () {
    var screen_width = window.innerWidth;
    var screen_height = window.innerHeight;
    main_obj(screen_width, screen_height);
    start();
    start_landscape();
    pulse_track();
    
});

$(window).resize(function () {
    document.querySelectorAll('.area_title').forEach(e => e.remove());
    var screen_width = window.innerWidth;
    var screen_height = window.innerHeight;
    main_obj(screen_width, screen_height);
    pin_number();
    start();
    start_landscape();
    pulse_track();
});

