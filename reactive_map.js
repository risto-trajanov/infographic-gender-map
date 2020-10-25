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
    console.log(pulse);
    if(pulse == 0){
        top = height * 0.135;
        left = width * 0.16;
        var $div = $('<div style="height:' + height * 0.1 + 'px" onClick="toggle_pulse(' + "one" + ')" class="pulse_holder area_title"><span  style="height:' + height * 0.21 + 'px" class="pulse_marker"></span></div>')

        $div.css({
            top: top + 'px',
            left: left + 'px',
            position: 'absolute'
        });
        $div.appendTo('#span-helper');
        
        top = height_landscape * 0.275;
        left = width_landscape * 0.063;
        var $div = $('<div style="height:' + height_landscape * 0.1 + 'px" onClick="toggle_pulse(' + "one" + ')" class="pulse_holder area_title"><span  style="height:' + height_landscape * 0.21 + 'px" class="pulse_marker"></span></div>')

        $div.css({
            top: top + 'px',
            left: left + 'px',
            position: 'absolute'
        });
        $div.appendTo('#span-helper-landscape');
    }
    if(pulse == 1){
        top = height * 0.33;
        left = width * 0.15;
        var $div = $('<div style="height:' + height * 0.1 + 'px" onClick="toggle_pulse(' + "two" + ')" class="pulse_holder area_title"><span  style="height:' + height * 1 + 'px" class="pulse_marker"></span></div>')

        $div.css({
            top: top + 'px',
            left: left + 'px',
            position: 'absolute'
        });
        $div.appendTo('#span-helper');
        
        top = height_landscape * 0.475;
        left = width_landscape * 0.156;
        var $div = $('<div style="height:' + height_landscape * 0.1 + 'px" onClick="toggle_pulse(' + "two" + ')" class="pulse_holder area_title"><span  style="height:' + height_landscape * 0.21 + 'px" class="pulse_marker"></span></div>')

        $div.css({
            top: top + 'px',
            left: left + 'px',
            position: 'absolute'
        });
        $div.appendTo('#span-helper-landscape');
    }
    if(pulse == 2){
        var top = height * 0.4;
        var left = width * 0.385;
        var $div = $('<div style="height:' + height * 0.1 + 'px" onClick="toggle_pulse(' + "three" + ')" class="pulse_holder area_title"><span  style="height:' + height * 1 + 'px" class="pulse_marker"></span></div>')

        $div.css({
            top: top + 'px',
            left: left + 'px',
            position: 'absolute'
        });
        $div.appendTo('#span-helper');
        
        top = height_landscape * 0.592;
        left = width_landscape * 0.295;
        var $div = $('<div style="height:' + height_landscape * 0.1 + 'px" onClick="toggle_pulse(' + "three" + ')" class="pulse_holder area_title"><span  style="height:' + height_landscape * 0.21 + 'px" class="pulse_marker"></span></div>')

        $div.css({
            top: top + 'px',
            left: left + 'px',
            position: 'absolute'
        });
        $div.appendTo('#span-helper-landscape');
    }
    if(pulse == 3){
        var top = height * 0.47;
        var left = width * 0.51;
        var $div = $('<div style="height:' + height * 0.1 + 'px" onClick="toggle_pulse(' + "four" + ')" class="pulse_holder area_title"><span  style="height:' + height * 1 + 'px" class="pulse_marker"></span></div>')

        $div.css({
            top: top + 'px',
            left: left + 'px',
            position: 'absolute'
        });
        $div.appendTo('#span-helper');
        
        top = height_landscape * 0.19;
        left = width_landscape * 0.383;
        var $div = $('<div style="height:' + height_landscape * 0.1 + 'px" onClick="toggle_pulse(' + "four" + ')" class="pulse_holder area_title"><span  style="height:' + height_landscape * 0.21 + 'px" class="pulse_marker"></span></div>')

        $div.css({
            top: top + 'px',
            left: left + 'px',
            position: 'absolute'
        });
        $div.appendTo('#span-helper-landscape');
    }
    if(pulse == 4){
        var top = height * 0.06;
        var left = width * 0.58;
        var $div = $('<div style="height:' + height * 0.1 + 'px" onClick="toggle_pulse(' + "five" + ')" class="pulse_holder area_title"><span  style="height:' + height * 1 + 'px" class="pulse_marker"></span></div>')

        $div.css({
            top: top + 'px',
            left: left + 'px',
            position: 'absolute'
        });
        $div.appendTo('#span-helper');
        
        top = height_landscape * 0.6;
        left = width_landscape * 0.367;
        var $div = $('<div style="height:' + height_landscape * 0.1 + 'px" onClick="toggle_pulse(' + "five" + ')" class="pulse_holder area_title"><span  style="height:' + height_landscape * 0.21 + 'px" class="pulse_marker"></span></div>')

        $div.css({
            top: top + 'px',
            left: left + 'px',
            position: 'absolute'
        });
        $div.appendTo('#span-helper-landscape');
    }
    if(pulse == 5){
        var top = height * 0.35;
        var left = width * 0.72;
        var $div = $('<div style="height:' + height * 0.1 + 'px" onClick="toggle_pulse(' + "six" + ')" class="pulse_holder area_title"><span  style="height:' + height * 1 + 'px" class="pulse_marker"></span></div>')

        $div.css({
            top: top + 'px',
            left: left + 'px',
            position: 'absolute'
        });
        $div.appendTo('#span-helper');
        
        top = height_landscape * 0.292;
        left = width_landscape * 0.506;
        var $div = $('<div style="height:' + height_landscape * 0.1 + 'px" onClick="toggle_pulse(' + "six" + ')" class="pulse_holder area_title"><span  style="height:' + height_landscape * 0.21 + 'px" class="pulse_marker"></span></div>')

        $div.css({
            top: top + 'px',
            left: left + 'px',
            position: 'absolute'
        });
        $div.appendTo('#span-helper-landscape');
        
        
    }
    if(pulse == 6){
        var top = height * 0.06;
        var left = width * 0.795;
        var $div = $('<div style="height:' + height * 0.1 + 'px" onClick="toggle_pulse(' + "seven" + ')" class="pulse_holder area_title"><span  style="height:' + height * 1 + 'px" class="pulse_marker"></span></div>')

        $div.css({
            top: top + 'px',
            left: left + 'px',
            position: 'absolute'
        });
        $div.appendTo('#span-helper');
        
        top = height_landscape * 0.296;
        left = width_landscape * 0.6;
        var $div = $('<div style="height:' + height_landscape * 0.1 + 'px" onClick="toggle_pulse(' + "seven" + ')" class="pulse_holder area_title"><span  style="height:' + height_landscape * 0.21 + 'px" class="pulse_marker"></span></div>')

        $div.css({
            top: top + 'px',
            left: left + 'px',
            position: 'absolute'
        });
        $div.appendTo('#span-helper-landscape');
    }
    if(pulse == 7){
        var top = height * 0.1;
        var left = width * 0.96;
        var $div = $('<div style="height:' + height * 0.1 + 'px" onClick="toggle_pulse(' + "eight" + ')" class="pulse_holder area_title"><span  style="height:' + height * 1 + 'px" class="pulse_marker"></span></div>')

        $div.css({
            top: top + 'px',
            left: left + 'px',
            position: 'absolute'
        });
        $div.appendTo('#span-helper');
        
        top = height_landscape * 0.162;
        left = width_landscape * 0.69;
        var $div = $('<div style="height:' + height_landscape * 0.1 + 'px" onClick="toggle_pulse(' + "eight" + ')" class="pulse_holder area_title"><span  style="height:' + height_landscape * 0.21 + 'px" class="pulse_marker"></span></div>')

        $div.css({
            top: top + 'px',
            left: left + 'px',
            position: 'absolute'
        });
        $div.appendTo('#span-helper-landscape');
    }
    if(pulse == 8){
        var top = height * 0.235;
        var left = width * 1.08;
        var $div = $('<div style="height:' + height * 0.1 + 'px" onClick="toggle_pulse(' + "nine" + ')" class="pulse_holder area_title"><span  style="height:' + height * 1 + 'px" class="pulse_marker"></span></div>')

        $div.css({
            top: top + 'px',
            left: left + 'px',
            position: 'absolute'
        });
        $div.appendTo('#span-helper');
        
        top = height_landscape * 0.12;
        left = width_landscape * 0.84;
        var $div = $('<div style="height:' + height_landscape * 0.1 + 'px" onClick="toggle_pulse(' + "nine" + ')" class="pulse_holder area_title"><span  style="height:' + height_landscape * 0.21 + 'px" class="pulse_marker"></span></div>')

        $div.css({
            top: top + 'px',
            left: left + 'px',
            position: 'absolute'
        });
        $div.appendTo('#span-helper-landscape');
    }
    if(pulse == 9){
        var top = height * 0.45;
        var left = width * 1.015;
        var $div = $('<div style="height:' + height * 0.1 + 'px" onClick="toggle_pulse(' + "ten" + ')" class="pulse_holder area_title"><span  style="height:' + height * 1 + 'px" class="pulse_marker"></span></div>')

        $div.css({
            top: top + 'px',
            left: left + 'px',
            position: 'absolute'
        });
        $div.appendTo('#span-helper');
        
        top = height_landscape * 0.3;
        left = width_landscape * 0.972;
        var $div = $('<div style="height:' + height_landscape * 0.1 + 'px" onClick="toggle_pulse(' + "ten" + ')" class="pulse_holder area_title"><span  style="height:' + height_landscape * 0.21 + 'px" class="pulse_marker"></span></div>')

        $div.css({
            top: top + 'px',
            left: left + 'px',
            position: 'absolute'
        });
        $div.appendTo('#span-helper-landscape');
    }
    if(pulse == 10){
        var top = height * 0.54;
        var left = width * 0.95;
        var $div = $('<div style="height:' + height * 0.1 + 'px" onClick="toggle_pulse(' + "eleven" + ')" class="pulse_holder area_title"><span  style="height:' + height * 1 + 'px" class="pulse_marker"></span></div>')

        $div.css({
            top: top + 'px',
            left: left + 'px',
            position: 'absolute'
        });
        $div.appendTo('#span-helper');
        
        top = height_landscape * 0.54;
        left = width_landscape * 0.937;
        var $div = $('<div style="height:' + height_landscape * 0.1 + 'px" onClick="toggle_pulse(' + "eleven" + ')" class="pulse_holder area_title"><span  style="height:' + height_landscape * 0.21 + 'px" class="pulse_marker"></span></div>')

        $div.css({
            top: top + 'px',
            left: left + 'px',
            position: 'absolute'
        });
        $div.appendTo('#span-helper-landscape');
    }
    if(pulse == 11){
        var top = height * 0.65;
        var left = width * 0.99;
        var $div = $('<div style="height:' + height * 0.1 + 'px" onClick="toggle_pulse(' + "twelve" + ')" class="pulse_holder area_title"><span  style="height:' + height * 1 + 'px" class="pulse_marker"></span></div>')

        $div.css({
            top: top + 'px',
            left: left + 'px',
            position: 'absolute'
        });
        $div.appendTo('#span-helper');
        
        top = height_landscape * 0.784;
        left = width_landscape * 0.949;
        var $div = $('<div style="height:' + height_landscape * 0.1 + 'px" onClick="toggle_pulse(' + "twelve" + ')" class="pulse_holder area_title"><span  style="height:' + height_landscape * 0.21 + 'px" class="pulse_marker"></span></div>')

        $div.css({
            top: top + 'px',
            left: left + 'px',
            position: 'absolute'
        });
        $div.appendTo('#span-helper-landscape');
    }
    if(pulse == 12){
        var top = height * 0.76;
        var left = width * 0.808;
        var $div = $('<div style="height:' + height * 0.1 + 'px" onClick="toggle_pulse(' + "thirteen" + ')" class="pulse_holder area_title"><span  style="height:' + height * 1 + 'px" class="pulse_marker"></span></div>')

        $div.css({
            top: top + 'px',
            left: left + 'px',
            position: 'absolute'
        });
        $div.appendTo('#span-helper');
        
        top = height_landscape * 0.88;
        left = width_landscape * 0.806;
        var $div = $('<div style="height:' + height_landscape * 0.1 + 'px" onClick="toggle_pulse(' + "thirteen" + ')" class="pulse_holder area_title"><span  style="height:' + height_landscape * 0.21 + 'px" class="pulse_marker"></span></div>')

        $div.css({
            top: top + 'px',
            left: left + 'px',
            position: 'absolute'
        });
        $div.appendTo('#span-helper-landscape');
    }
    if(pulse == 13){
        var top = height * 0.84;
        var left = width * 0.673;
        var $div = $('<div style="height:' + height * 0.1 + 'px" onClick="toggle_pulse(' + "fourteen" + ')" class="pulse_holder area_title"><span  style="height:' + height * 1 + 'px" class="pulse_marker"></span></div>')

        $div.css({
            top: top + 'px',
            left: left + 'px',
            position: 'absolute'
        });
        $div.appendTo('#span-helper');
        
        top = height_landscape * 0.867;
        left = width_landscape * 0.687;
        var $div = $('<div style="height:' + height_landscape * 0.1 + 'px" onClick="toggle_pulse(' + "fourteen" + ')" class="pulse_holder area_title"><span  style="height:' + height_landscape * 0.21 + 'px" class="pulse_marker"></span></div>')

        $div.css({
            top: top + 'px',
            left: left + 'px',
            position: 'absolute'
        });
        $div.appendTo('#span-helper-landscape');
    }
    if(pulse == 14){
        var top = height * 0.91;
        var left = width * 0.535;
        var $div = $('<div style="height:' + height * 0.1 + 'px" onClick="toggle_pulse(' + "fifteen" + ')" class="pulse_holder area_title"><span  style="height:' + height * 1 + 'px" class="pulse_marker"></span></div>')

        $div.css({
            top: top + 'px',
            left: left + 'px',
            position: 'absolute'
        });
        $div.appendTo('#span-helper');
        
        top = height_landscape * 0.938;
        left = width_landscape * 0.599;
        var $div = $('<div style="height:' + height_landscape * 0.1 + 'px" onClick="toggle_pulse(' + "fifteen" + ')" class="pulse_holder area_title"><span  style="height:' + height_landscape * 0.21 + 'px" class="pulse_marker"></span></div>')

        $div.css({
            top: top + 'px',
            left: left + 'px',
            position: 'absolute'
        });
        $div.appendTo('#span-helper-landscape');
    }
    if(pulse == 15){
        var top = height * 0.825;
        var left = width * 0.23;
        var $div = $('<div style="height:' + height * 0.1 + 'px" onClick="toggle_pulse(' + "sixteen" + ')" class="pulse_holder area_title"><span  style="height:' + height * 1 + 'px" class="pulse_marker"></span></div>')

        $div.css({
            top: top + 'px',
            left: left + 'px',
            position: 'absolute'
        });
        $div.appendTo('#span-helper');
        
        top = height_landscape * 0.85;
        left = width_landscape * 0.417;
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
            left = width * 0.08;
            var $span = $('<span style="font-size:' + height * 0.022 + 'px; color:' + blue + '" class="area_title">START THE JOURNEY HERE</span>');
            $span.css({
                top: top + 'px',
                left: left + 'px',
                position: 'absolute'
            });
            $span.appendTo('#main');
            top = height * 0.2;
            left = width * 0.11;
            var $span = $('<span style="font-size:' + height * 0.0175 + 'px" class="area_title">' + title + '</span>');

            $span.css({
                top: top + 'px',
                left: left + 'px',
                position: 'absolute'
            });
            $span.appendTo('#main');
            
            top = height * 0.11;
            left = width * 0.24;
            var $div = $('<div class="pin bounce area_title"></div>')
            
            $div.css({
                top: top + 'px',
                left: left + 'px',
                position: 'absolute'
            });
            $div.appendTo('#span-helper');
            

        }
        if (number == 'two-area') {
            top = height * 0.385;
            left = width * 0.098;
            var $span = $('<span style="font-size:' + height * 0.0175 + 'px" class="area_title">' + title + '</span>');

            $span.css({
                top: top + 'px',
                left: left + 'px',
                position: 'absolute'
            });
            $span.appendTo('#main');
            
        }
        if (number == 'three-area') {
            top = height * 0.465;
            left = width * 0.357;
            var $span = $('<span style="font-size:' + height * 0.0175 + 'px" class="area_title">' + title + '</span>');

            $span.css({
                top: top + 'px',
                left: left + 'px',
                position: 'absolute'
            });
            $span.appendTo('#main');
        }
        if (number == 'four-area') {
            top = height * 0.45;
            left = width * 0.555;
            var $span = $('<span style="font-size:' + height * 0.0175 + 'px" class="area_title">' + title + '</span>');

            $span.css({
                top: top + 'px',
                left: left + 'px',
                position: 'absolute'
            });
            $span.appendTo('#main');
        }
        if (number == 'five-area') {
            top = height * 0.035;
            left = width * 0.63;
            var $span = $('<span style="font-size:' + height * 0.0175 + 'px" class="area_title">' + title + '</span>');

            $span.css({
                top: top + 'px',
                left: left + 'px',
                position: 'absolute'
            });
            $span.appendTo('#main');
        }
        if (number == 'six-area') {
            top = height * 0.33;
            left = width * 0.77;
            var $span = $('<span style="font-size:' + height * 0.0175 + 'px" class="area_title">' + title + '</span>');

            $span.css({
                top: top + 'px',
                left: left + 'px',
                position: 'absolute'
            });
            $span.appendTo('#main');
        }
        if (number == 'seven-area') {
            top = height * 0.02;
            left = width * 0.84;
            var $span = $('<span style="font-size:' + height * 0.0175 + 'px" class="area_title">' + title + '</span>');

            $span.css({
                top: top + 'px',
                left: left + 'px',
                position: 'absolute'
            });
            $span.appendTo('#main');
        }
        if (number == 'eight-area') {
            top = height * 0.07;
            left = width * 1.02;
            var $span = $('<span style="font-size:' + height * 0.0175 + 'px" class="area_title">' + title + '</span>');

            $span.css({
                top: top + 'px',
                left: left + 'px',
                position: 'absolute'
            });
            $span.appendTo('#main');
        }
        if (number == 'nine-area') {
            top = height * 0.21;
            left = width * 1.13;
            var $span = $('<span style="font-size:' + height * 0.0175 + 'px" class="area_title">' + title + '</span>');

            $span.css({
                top: top + 'px',
                left: left + 'px',
                position: 'absolute'
            });
            $span.appendTo('#main');
        }
        if (number == 'ten-area') {
            top = height * 0.44;
            left = width * 1.065;
            var $span = $('<span style="font-size:' + height * 0.0175 + 'px" class="area_title">' + title + '</span>');

            $span.css({
                top: top + 'px',
                left: left + 'px',
                position: 'absolute'
            });
            $span.appendTo('#main');
        }
        if (number == 'eleven-area') {
            top = height * 0.52;
            left = width * 0.999;
            var $span = $('<span style="font-size:' + height * 0.0175 + 'px" class="area_title">' + title + '</span>');

            $span.css({
                top: top + 'px',
                left: left + 'px',
                position: 'absolute'
            });
            $span.appendTo('#main');
        }
        if (number == 'twelve-area') {
            top = height * 0.635;
            left = width * 1.04;
            var $span = $('<span style="font-size:' + height * 0.0175 + 'px" class="area_title">' + title + '</span>');

            $span.css({
                top: top + 'px',
                left: left + 'px',
                position: 'absolute'
            });
            $span.appendTo('#main');
        }
        if (number == 'thirteen-area') {
            top = height * 0.74;
            left = width * 0.855;
            var $span = $('<span style="font-size:' + height * 0.0175 + 'px" class="area_title">' + title + '</span>');

            $span.css({
                top: top + 'px',
                left: left + 'px',
                position: 'absolute'
            });
            $span.appendTo('#main');
        }
        if (number == 'fourteen-area') {
            top = height * 0.83;
            left = width * 0.72;
            var $span = $('<span style="font-size:' + height * 0.0175 + 'px" class="area_title">' + title + '</span>');

            $span.css({
                top: top + 'px',
                left: left + 'px',
                position: 'absolute'
            });
            $span.appendTo('#main');
        }
        if (number == 'fifteen-area') {
            top = height * 0.9;
            left = width * 0.583;
            var $span = $('<span style="font-size:' + height * 0.0175 + 'px" class="area_title">' + title + '</span>');

            $span.css({
                top: top + 'px',
                left: left + 'px',
                position: 'absolute'
            });
            $span.appendTo('#main');
        }
        if (number == 'sixteen-area') {
            top = height * 0.68;
            left = width * 0.185;
            var $span = $('<span style="font-size:' + height * 0.029 + 'px; color:' + red + '" class="area_title">FINISH LINE</span>');
            $span.css({
                top: top + 'px',
                left: left + 'px',
                position: 'absolute'
            });
            $span.appendTo('#main');
            top = height * 0.9;
            left = width * 0.18;
            var $span = $('<span style="font-size:' + height * 0.0175 + 'px;" class="area_title">' + title + '</span>');

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
        var left = width * 0.385;
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
            top = height * 0.16;
            left = width * 0.02;
            var $span = $('<span style="font-size:' + height * 0.028 + 'px; color:' + blue + '" class="area_title">START THE JOURNEY HERE</span>');
            $span.css({
                top: top + 'px',
                left: left + 'px',
                position: 'absolute'
            });
            $span.appendTo('#main-landscape');
            top = height * 0.338;
            left = width * 0.041;
            var $span = $('<span style="font-size:' + height * 0.02 + 'px" class="area_title">' + title + '</span>');

            $span.css({
                top: top + 'px',
                left: left + 'px',
                position: 'absolute'
            });
            $span.appendTo('#main-landscape');
            
            top = height * 0.23;
            left = width * 0.105;
            var $div = $('<div class="pin bounce area_title"></div>')
            
            $div.css({
                top: top + 'px',
                left: left + 'px',
                position: 'absolute'
            });
            $div.appendTo('#span-helper-landscape');
            
            top = height * 0.278;
            left = width * 0.0638;
            var $div = $('<div style="height:' + height * 0.1 + 'px" onClick="toggle_pulse(' + "one" + ')" class="pulse_holder area_title"><span  style="height:' + height * 1 + 'px" class="pulse_marker"></span></div>')
            
            $div.css({
                top: top + 'px',
                left: left + 'px',
                position: 'absolute'
            });
            $div.appendTo('#span-helper-landscape');

        }
        if (number == 'two-area-landscape') {
            top = height * 0.52;
            left = width * 0.12;
            var $span = $('<span style="font-size:' + height * 0.02 + 'px" class="area_title">' + title + '</span>');

            $span.css({
                top: top + 'px',
                left: left + 'px',
                position: 'absolute'
            });
            $span.appendTo('#main-landscape');
            
        }
        if (number == 'three-area-landscape') {
            top = height * 0.645;
            left = width * 0.266;
            var $span = $('<span style="font-size:' + height * 0.02 + 'px" class="area_title">' + title + '</span>');

            $span.css({
                top: top + 'px',
                left: left + 'px',
                position: 'absolute'
            });
            $span.appendTo('#main-landscape');
        }
        if (number == 'four-area-landscape') {
            top = height * 0.165;
            left = width * 0.409;
            var $span = $('<span style="font-size:' + height * 0.02 + 'px" class="area_title">' + title + '</span>');

            $span.css({
                top: top + 'px',
                left: left + 'px',
                position: 'absolute'
            });
            $span.appendTo('#main-landscape');
        }
        if (number == 'five-area-landscape') {
            top = height * 0.65;
            left = width * 0.35;
            var $span = $('<span style="font-size:' + height * 0.02 + 'px" class="area_title">' + title + '</span>');

            $span.css({
                top: top + 'px',
                left: left + 'px',
                position: 'absolute'
            });
            $span.appendTo('#main-landscape');
        }
        if (number == 'six-area-landscape') {
            top = height * 0.28;
            left = width * 0.53;
            var $span = $('<span style="font-size:' + height * 0.02 + 'px" class="area_title">' + title + '</span>');

            $span.css({
                top: top + 'px',
                left: left + 'px',
                position: 'absolute'
            });
            $span.appendTo('#main-landscape');
        }
        if (number == 'seven-area-landscape') {
            top = height * 0.217;
            left = width * 0.59;
            var $span = $('<span style="font-size:' + height * 0.02 + 'px" class="area_title">' + title + '</span>');

            $span.css({
                top: top + 'px',
                left: left + 'px',
                position: 'absolute'
            });
            $span.appendTo('#main-landscape');
        }
        if (number == 'eight-area-landscape') {
            top = height * 0.1;
            left = width * 0.723;
            var $span = $('<span style="font-size:' + height * 0.02 + 'px" class="area_title">' + title + '</span>');

            $span.css({
                top: top + 'px',
                left: left + 'px',
                position: 'absolute'
            });
            $span.appendTo('#main-landscape');
        }
        if (number == 'nine-area-landscape') {
            top = height * 0.1;
            left = width * 0.863;
            var $span = $('<span style="font-size:' + height * 0.02 + 'px" class="area_title">' + title + '</span>');

            $span.css({
                top: top + 'px',
                left: left + 'px',
                position: 'absolute'
            });
            $span.appendTo('#main-landscape');
        }
        if (number == 'ten-area-landscape') {
            top = height * 0.27;
            left = width * 0.996;
            var $span = $('<span style="font-size:' + height * 0.02 + 'px" class="area_title">' + title + '</span>');

            $span.css({
                top: top + 'px',
                left: left + 'px',
                position: 'absolute'
            });
            $span.appendTo('#main-landscape');
        }
        if (number == 'eleven-area-landscape') {
            top = height * 0.515;
            left = width * 0.961;
            var $span = $('<span style="font-size:' + height * 0.02 + 'px" class="area_title">' + title + '</span>');

            $span.css({
                top: top + 'px',
                left: left + 'px',
                position: 'absolute'
            });
            $span.appendTo('#main-landscape');
        }
        if (number == 'twelve-area-landscape') {
            top = height * 0.76;
            left = width * 0.975;
            var $span = $('<span style="font-size:' + height * 0.02 + 'px" class="area_title">' + title + '</span>');

            $span.css({
                top: top + 'px',
                left: left + 'px',
                position: 'absolute'
            });
            $span.appendTo('#main-landscape');
        }
        if (number == 'thirteen-area-landscape') {
            top = height * 0.93;
            left = width * 0.78;
            var $span = $('<span style="font-size:' + height * 0.02 + 'px" class="area_title">' + title + '</span>');

            $span.css({
                top: top + 'px',
                left: left + 'px',
                position: 'absolute'
            });
            $span.appendTo('#main-landscape');
        }
        if (number == 'fourteen-area-landscape') {
            top = height * 0.92;
            left = width * 0.678;
            var $span = $('<span style="font-size:' + height * 0.02 + 'px" class="area_title">' + title + '</span>');

            $span.css({
                top: top + 'px',
                left: left + 'px',
                position: 'absolute'
            });
            $span.appendTo('#main-landscape');
        }
        if (number == 'fifteen-area-landscape') {
            top = height * 0.929;
            left = width * 0.525;
            var $span = $('<span style="font-size:' + height * 0.02 + 'px" class="area_title">' + title + '</span>');

            $span.css({
                top: top + 'px',
                left: left + 'px',
                position: 'absolute'
            });
            $span.appendTo('#main-landscape');
        }
        if (number == 'sixteen-area-landscape') {
            top = height * 0.76;
            left = width * 0.345;
            var $span = $('<span style="font-size:' + height * 0.029 + 'px; color:' + red + '" class="area_title">FINISH LINE</span>');
            $span.css({
                top: top + 'px',
                left: left + 'px',
                position: 'absolute'
            });
            $span.appendTo('#main-landscape');
            top = height * 0.915;
            left = width * 0.39;
            var $span = $('<span style="font-size:' + height * 0.02 + 'px;" class="area_title">' + title + '</span>');

            $span.css({
                top: top + 'px',
                left: left + 'px',
                position: 'absolute'
            });
            $span.appendTo('#main-landscape');
        }
    });

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
        var top = height * 0.11;
        var left = width * 0.24;
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
        var left = width * 0.22;
        var $div = $('<div class="pin bounce area_title red_background"></div>')

        $div.css({
            top: top + 'px',
            left: left + 'px',
            position: 'absolute'
        });
        $div.appendTo('#span-helper');
    }
    if(numbers_track[2] == 1){
        var top = height * 0.35;
        var left = width * 0.4;
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
        var left = width * 0.6;
        var $div = $('<div class="pin bounce area_title red_background"></div>')

        $div.css({
            top: top + 'px',
            left: left + 'px',
            position: 'absolute'
        });
        $div.appendTo('#span-helper');
    }
    if(numbers_track[4] == 1){
        var top = height * 0;
        var left = width * 0.6;
        var $div = $('<div class="pin bounce area_title"></div>')

        $div.css({
            top: top + 'px',
            left: left + 'px',
            position: 'absolute'
        });
        $div.appendTo('#span-helper');
    }
    if(numbers_track[5] == 1){
        var top = height * 0.17;
        var left = width * 0.685;
        var $div = $('<div class="pin bounce area_title red_background"></div>')

        $div.css({
            top: top + 'px',
            left: left + 'px',
            position: 'absolute'
        });
        $div.appendTo('#span-helper');
    }
    if(numbers_track[6] == 1){
        var top = height * 0.0;
        var left = width * 0.82;
        var $div = $('<div class="pin bounce area_title"></div>')

        $div.css({
            top: top + 'px',
            left: left + 'px',
            position: 'absolute'
        });
        $div.appendTo('#span-helper');
    }
    if(numbers_track[7] == 1){
        var top = height * 0.17;
        var left = width * 0.92;
        var $div = $('<div class="pin bounce area_title red_background"></div>')

        $div.css({
            top: top + 'px',
            left: left + 'px',
            position: 'absolute'
        });
        $div.appendTo('#span-helper');
    }
    if(numbers_track[8] == 1){
        var top = height * 0.18;
        var left = width * 1.15;
        var $div = $('<div class="pin bounce area_title"></div>')

        $div.css({
            top: top + 'px',
            left: left + 'px',
            position: 'absolute'
        });
        $div.appendTo('#span-helper');
    }
    if(numbers_track[9] == 1){
        var top = height * 0.39;
        var left = width * 0.85;
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
        var left = width * 0.9;
        var $div = $('<div class="pin bounce area_title"></div>')

        $div.css({
            top: top + 'px',
            left: left + 'px',
            position: 'absolute'
        });
        $div.appendTo('#span-helper');
    }
    if(numbers_track[11] == 1){
        var top = height * 0.63;
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
        var top = height * 0.71;
        var left = width * 0.8154;
        var $div = $('<div class="pin bounce area_title"></div>')

        $div.css({
            top: top + 'px',
            left: left + 'px',
            position: 'absolute'
        });
        $div.appendTo('#span-helper');
    }
    if(numbers_track[13] == 1){
        var top = height * 0.79;
        var left = width * 0.685;
        var $div = $('<div class="pin bounce area_title red_background"></div>')

        $div.css({
            top: top + 'px',
            left: left + 'px',
            position: 'absolute'
        });
        $div.appendTo('#span-helper');
    }
    if(numbers_track[14] == 1){
        var top = height * 0.81;
        var left = width * 0.522;
        var $div = $('<div class="pin bounce area_title"></div>')

        $div.css({
            top: top + 'px',
            left: left + 'px',
            position: 'absolute'
        });
        $div.appendTo('#span-helper');
    }
    if(numbers_track[15] == 1){
        var top = height * 0.825;
        var left = width * 0.385;
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
        var top = height * 0.23;
        var left = width * 0.105;
        var $div = $('<div class="pin bounce area_title"></div>')

        $div.css({
            top: top + 'px',
            left: left + 'px',
            position: 'absolute'
        });
        $div.appendTo('#span-helper-landscape');
    }
    if(numbers_track[1] == 1){
        var top = height * 0.47;
        var left = width * 0.13;
        var $div = $('<div class="pin bounce area_title red_background"></div>')

        $div.css({
            top: top + 'px',
            left: left + 'px',
            position: 'absolute'
        });
        $div.appendTo('#span-helper-landscape');
    }
    if(numbers_track[2] == 1){
        var top = height * 0.54;
        var left = width * 0.3;
        var $div = $('<div class="pin bounce area_title"></div>')

        $div.css({
            top: top + 'px',
            left: left + 'px',
            position: 'absolute'
        });
        $div.appendTo('#span-helper-landscape');
    }
    if(numbers_track[3] == 1){
        var top = height * 0.13;
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
        var top = height * 0.53;
        var left = width * 0.38;
        var $div = $('<div class="pin bounce area_title"></div>')

        $div.css({
            top: top + 'px',
            left: left + 'px',
            position: 'absolute'
        });
        $div.appendTo('#span-helper-landscape');
    }
    if(numbers_track[5] == 1){
        var top = height * 0.228;
        var left = width * 0.5058;
        var $div = $('<div class="pin bounce area_title red_background"></div>')

        $div.css({
            top: top + 'px',
            left: left + 'px',
            position: 'absolute'
        });
        $div.appendTo('#span-helper-landscape');
    }
    if(numbers_track[6] == 1){
        var top = height * 0.19;
        var left = width * 0.604;
        var $div = $('<div class="pin bounce area_title"></div>')

        $div.css({
            top: top + 'px',
            left: left + 'px',
            position: 'absolute'
        });
        $div.appendTo('#span-helper-landscape');
    }
    if(numbers_track[7] == 1){
        var top = height * 0.08;
        var left = width * 0.69;
        var $div = $('<div class="pin bounce area_title red_background"></div>')

        $div.css({
            top: top + 'px',
            left: left + 'px',
            position: 'absolute'
        });
        $div.appendTo('#span-helper-landscape');
    }
    if(numbers_track[8] == 1){
        var top = height * 0.07;
        var left = width * 0.87;
        var $div = $('<div class="pin bounce area_title"></div>')

        $div.css({
            top: top + 'px',
            left: left + 'px',
            position: 'absolute'
        });
        $div.appendTo('#span-helper-landscape');
    }
    if(numbers_track[9] == 1){
        var top = height * 0.265;
        var left = width * 0.945;
        var $div = $('<div class="pin bounce area_title red_background"></div>')

        $div.css({
            top: top + 'px',
            left: left + 'px',
            position: 'absolute'
        });
        $div.appendTo('#span-helper-landscape');
    }
    if(numbers_track[10] == 1){
        var top = height * 0.51;
        var left = width * 0.91;
        var $div = $('<div class="pin bounce area_title"></div>')

        $div.css({
            top: top + 'px',
            left: left + 'px',
            position: 'absolute'
        });
        $div.appendTo('#span-helper-landscape');
    }
    if(numbers_track[11] == 1){
        var top = height * 0.74;
        var left = width * 0.93;
        var $div = $('<div class="pin bounce area_title red_background"></div>')

        $div.css({
            top: top + 'px',
            left: left + 'px',
            position: 'absolute'
        });
        $div.appendTo('#span-helper-landscape');
    }
    if(numbers_track[12] == 1){
        var top = height * 0.81;
        var left = width * 0.81;
        var $div = $('<div class="pin bounce area_title"></div>')

        $div.css({
            top: top + 'px',
            left: left + 'px',
            position: 'absolute'
        });
        $div.appendTo('#span-helper-landscape');
    }
    if(numbers_track[13] == 1){
        var top = height * 0.84;
        var left = width * 0.72;
        var $div = $('<div class="pin bounce area_title red_background"></div>')

        $div.css({
            top: top + 'px',
            left: left + 'px',
            position: 'absolute'
        });
        $div.appendTo('#span-helper-landscape');
    }
    if(numbers_track[14] == 1){
        var top = height * 0.88;
        var left = width * 0.605;
        var $div = $('<div class="pin bounce area_title"></div>')

        $div.css({
            top: top + 'px',
            left: left + 'px',
            position: 'absolute'
        });
        $div.appendTo('#span-helper-landscape');
    }
    if(numbers_track[15] == 1){
        var top = height * 0.82;
        var left = width * 0.45;
        var $div = $('<div class="pin bounce area_title red_background"></div>')

        $div.css({
            top: top + 'px',
            left: left + 'px',
            position: 'absolute'
        });
        $div.appendTo('#span-helper-landscape');
    }
    
}

function main_obj(scren_width){
    var main = document.getElementById('main');
    var main_landscape = document.getElementById('main-landscape');
    if(scren_width > 1000){
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
    main_obj(screen_width);
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
    main_obj(screen_width);
    start();
    start_landscape();
    pulse_track();
    
});

$(window).resize(function () {
    document.querySelectorAll('.area_title').forEach(e => e.remove());
    var screen_width = window.innerWidth;
    main_obj(screen_width);
    pin_number();
    start();
    start_landscape();
    pulse_track();
});

