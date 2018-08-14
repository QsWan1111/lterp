/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function () {
    $.get("/login.xhtml", function (data) {
        $("#iframe").html(data);
    });
    $(function () {
        $('').click(function () {
            var $this = $(this),
                    _clickTab = $this.find('').attr('target');
            $.get(_clickTab, function (data) {
                $("#iframe").html(data);
            });
        });
    });
});

