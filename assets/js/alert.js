(function(){

    

})();

function sendAlert(content, type, position, delay){
    if(position != 'bottom' && position != 'top') return console.error('Position is required, true values: bottom or top');
    if(typeof content !== 'string') return console.error('Content is required, typeof is String');
    if(!type) type = 'info';
    if(!delay) delay = 2000;


    var ng_alert = document.querySelector('.ng-alert.' + position);
    if(!ng_alert){
        create_alert(position);
        ng_alert = document.querySelector('.ng-alert.' + position);
    }
    

    var alert = document.createElement('div');
    alert.classList.add('alert','alert-' + type,'anim');
    alert.innerHTML = content + '<button type="button" class="close" aria-label="Close" onclick="closeAlert(event)"><span aria-hidden="true">&times;</span></button>';
    
    ng_alert.appendChild(alert);
    

    setTimeout(function(){
        closeAlert(alert);
    }, delay);

}

function create_alert(position){
    var ngAlert = document.createElement('div');
    ngAlert.classList.add('ng-alert', position);
    document.body.appendChild(ngAlert);
}

function closeAlert(alert){
    if(!!alert.target) alert = $(alert.target).parent().parent();
    else alert = $(alert);

    alert.removeClass('anim');
    alert.fadeOut(500, function(){
        
        alert.remove();
    });
}
