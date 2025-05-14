jQuery(document).ready(function () {
    $("#MobileMenuControll").click(function () {
        MenuAct();
    });
    $("#TopImg").click(function () {
        $('html,body').animate({ scrollTop: 0 }, 500, 'swing', function () {
        });
    });
});
var _SpeedShow = 250;

function InitializeSlideShow() {
    $("a[rel^='SlideShow']").prettyPhoto();
}
function Requered(Obj) {
    var Itog = 0;
    if ($("#" + Obj).val().trim() == "") {
        $("#" + Obj).addClass('txt_in_all_incorr');
        $("#" + Obj).val('');
    }
    else { Itog = 1; $("#" + Obj).removeClass('txt_in_all_incorr'); }

    return Itog;
}
function BookService() {
    var Count = 0; var CountMax = 3;
    Count += Requered('txt_book_name');
    Count += Requered('txt_book_phone');
    Count += Requered('txt_service_data');

    if (CountMax > Count) {
        return false;
    }
    var data = $("#personalInfo").serialize();

    $.ajax({
        type: "POST",
        url: "/Home/GetMiniBook",
        data: data,
        success: function (data) {
            if (data == "ok") {
                ShowPopup();
                ClearMiniBookForm();
            }
        },
        beforeSend: function () {
            
        },
        error: function (result) {
            console.log(result);
        },
        complete: function (endData) {

        }
    });
}
function HidePopup() {
    $("#MainPopup").fadeOut(_SpeedShow);
    $("#BackFon").fadeOut(_SpeedShow);
}
function ShowPopup() {
    $("#MainPopup").fadeIn(_SpeedShow);
    $("#BackFon").fadeIn(_SpeedShow);
}
function ClearMiniBookForm() {
    $("#txt_book_name").val('');
    $("#txt_book_phone").val('');
    $("#txt_book_email").val('');
    $("#txt_service_data").val('');
    $("#txt_special_request").val('');
}
function ShowHideBlock(ObjToShow,iconImage) {
    $("#" + ObjToShow).slideToggle(_SpeedShow);
    console.log($("#" + iconImage).hasClass("bi-caret-down-fill"));

    if ($("#" + iconImage).hasClass("bi-caret-down-fill")) {
        $("#" + iconImage).removeClass('bi-caret-down-fill').addClass('bi-caret-right-fill');
    }
    else {
        $("#" + iconImage).removeClass('bi-caret-right-fill').addClass('bi-caret-down-fill');
    }
}
function FAQ_Block(ObjTarget) {
    $("#" + ObjTarget).slideToggle(250);
}
//////// Menu
function MenuAct() {
    if ($("#MenuNavigate").is(":visible")) {
        HidePopUp();
        $("#MobileIconMenu").removeClass('bi bi-x-lg').addClass('bi bi-list');
        $(document.body).removeClass('BodyFix');
    }
    else {
        ShowMenu();
        var _windowHeight = $(window).height() - 90;
        $("#MenuNavigate").css({ "max-height": _windowHeight });

        $("#MobileIconMenu").removeClass('bi bi-list').addClass('bi bi-x-lg');
        $(document.body).addClass('BodyFix');
    }
}
function ShowMenu() {
    $("#JBackFon").fadeIn(150, function () {
        $("#MenuNavigate").slideDown(_SpeedShow);
        $("#JBackFon").clearQueue();
        $("#MenuNavigate").clearQueue();
    });
}
function HidePopUp() {
    $("#MenuNavigate").slideUp(_SpeedShow, function () {
        $("#JBackFon").fadeOut(_SpeedShow);
    });        
}
function ShowMenuDetails(ObjToShow) {
    $("#" + ObjToShow).toggle(_SpeedShow);
}
//////// DefPage
function ShowAllAreas() {
    $(".area-block1").slideDown(_SpeedShow);
    $(".area-block2").slideDown(_SpeedShow);
    $(".area-block3").slideDown(_SpeedShow);
    $("#DefDetailsAreas").hide();
}
//////// FormsData
function Open_Form(ObjOpen) {
    $("#" + ObjOpen).fadeIn(_SpeedShow);
    $("#BackFon").fadeIn(_SpeedShow);    
}
function Close_Form(ObjOpen) {
    $("#" + ObjOpen).fadeOut(_SpeedShow);
    $("#BackFon").fadeOut(_SpeedShow);
}
function SendForm1() {
    var Count = 0; var CountMax = 0;
    Count += Requered('txt_form1_name'); CountMax++;
    Count += Requered('txt_form1_phone_number'); CountMax++;

    if (CountMax > Count) {
        return false;
    }
    var data = $("#Index_mini_form").serialize();

    $.ajax({
        type: "POST",
        url: "/Home/GetMiniBook0",
        data: data,
        success: function (data) {
            if (data == "ok") {
                ShowPopup();
                $("#MainPopup_Form0").fadeOut(_SpeedShow);
            }
            $("#state_loading1").removeClass('showLoader');
        },
        beforeSend: function () {
            $("#state_loading1").addClass('showLoader');
        },
        error: function (result) {
            console.log(result);
            //$("#state_loading").fadeOut();
        },
        complete: function (endData) {

        }
    });
}
function SendForm0() {
    var Count = 0; var CountMax = 0;
    Count += Requered('txt_form0_name'); CountMax++;
    Count += Requered('txt_form0_phone_number'); CountMax++;

    if (CountMax > Count) {
        return false;
    }
    var data = $("#Result_Block").serialize();

    $.ajax({
        type: "POST",
        url: "/Home/GetMiniBook0",
        data: data,
        success: function (data) {
            if (data == "ok") {
                ShowPopup();
                $("#MainPopup_Form0").fadeOut(_SpeedShow);                
            }
            $("#state_loading").removeClass('showLoader');
        },
        beforeSend: function () {
            $("#state_loading").addClass('showLoader');
        },
        error: function (result) {
            console.log(result);
            //$("#state_loading").fadeOut();
        },
        complete: function (endData) {

        }
    });
}
function SendFormRightPanel() {
    var Count = 0; var CountMax = 0;
    Count += Requered('fast_form_order'); CountMax++;
    Count += Requered('fast_form_phone'); CountMax++;
    Count += Requered('fast_form_email'); CountMax++;

    if (CountMax > Count) {
        return false;
    }
    var data = $("#Result_Block").serialize();

    $.ajax({
        type: "POST",
        url: "/Home/SendFormRightPanel",
        data: data,
        success: function (data) {
            if (data == "ok") {
                console.log('here-ok');
                ShowPopup();
                $("#MainPopup_Form0").fadeOut(_SpeedShow);
            }
            $("#book_state_loading").removeClass('showLoader');
        },
        beforeSend: function () {
            $("#book_state_loading").addClass('showLoader');
        },
        error: function (result) {
            console.log(result);
        },
        complete: function (endData) {

        }
    });
}
function SendFullForm() {
    var Count = 0; var CountMax = 0;
    Count += Requered('txt_name'); CountMax++;
    Count += Requered('txt_phone'); CountMax++;
    Count += Requered('txt_email'); CountMax++;
    Count += Requered('txt_address'); CountMax++;
    Count += Requered('txt_date'); CountMax++;
    Count += Requered('txt_details'); CountMax++;

    if (CountMax > Count) {
        return false;
    }
    var data = $("#FullBook").serialize();

    $.ajax({
        type: "POST",
        url: "/Home/SendFullForm",
        data: data,
        success: function (data) {
            if (data == "ok") {
                ShowPopup();
                ClearFullForm();
            }
            $("#book_state_loading").removeClass('showLoader');
        },
        beforeSend: function () {
            $("#book_state_loading").addClass('showLoader');
        },
        error: function (result) {
            console.log(result);
        },
        complete: function (endData) {
            window.location = "/thank-you/";
        }
    });
}
function ClearFullForm() {
    $("#txt_name").val('');
    $("#txt_phone").val('');
    $("#txt_email").val('');
    $("#txt_address").val('');
    $("#txt_date").val('');
    $("#txt_details").val('');
}
function SendFullFormIndexPage() {
    var Count = 0; var CountMax = 0;
    Count += Requered('index_name'); CountMax++;
    Count += Requered('index_txt_phone'); CountMax++;
    Count += Requered('index_txt_email'); CountMax++;
    Count += Requered('index_txt_date'); CountMax++;
    Count += Requered('index_txt_address'); CountMax++;

    if (CountMax > Count) {
        return false;
    }
    var data = $("#indexFullForm").serialize();

    $.ajax({
        type: "POST",
        url: "/Home/SendFullForm",
        data: data,
        success: function (data) {
            if (data == "ok") {
                ShowPopup();
                ClearFullForm();
            }
            $("#book_state_loading").removeClass('showLoader');
        },
        beforeSend: function () {
            $("#book_state_loading").addClass('showLoader');
        },
        error: function (result) {
            console.log(result);
        },
        complete: function (endData) {

        }
    });
}
//////// ContactUS
function ContactUS_Form() {
    var Count = 0; var CountMax = 0;
    Count += Requered('txt_name'); CountMax++;
    Count += Requered('txt_phone'); CountMax++;
    Count += Requered('txt_details'); CountMax++;
    if (CountMax > Count) {
        return false;
    }
    var data = $("#FullBook").serialize();

    $.ajax({
        type: "POST",
        url: "/Home/ContactUS_Form",
        data: data,
        success: function (data) {
            if (data == "ok") {
                ShowPopup();
                ClearFeedBackForm();
            }
            $("#book_state_loading").removeClass('showLoader');
        },
        beforeSend: function () {
            $("#book_state_loading").addClass('showLoader');
        },
        error: function (result) {
            console.log(result);
        },
        complete: function (endData) {

        }
    });
}
function ClearFeedBackForm() {
    $("#txt_name").val('');
    $("#txt_phone").val('');
    $("#txt_details").val('');
    $("#txt_email").val('');
}
