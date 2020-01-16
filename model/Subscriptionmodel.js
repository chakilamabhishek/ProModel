export default class Subscription{
  constructor(payload){
      this.subscribeId = payload.subscribeId
      this.subscribeFrom = payload.subscribeFrom
      this.subscribeTo = payload.subscribeTo
      this.vacations = payload.vacations
      this.itemId = payload.itemId
      this.subscribedOnWeekend = payload.subscribedOnWeekend
  }
  get _subscribeId(){
      return this.subscribeId
  }
  get _subscribeFrom(){
      return this.subscribeFrom
  }
  get _subscribeTo(){
      return this.subscribeTo
  }
  get _vacations(){
      return this.vacations
  }
  get _itemId(){
      return this.itemId
  }
  get _subscribeOnWeekend(){
      return this.subscribedOnWeekend
  }
  set _subscribeId(payload){
      this.subscribeId = payload
  }
  set _subscribeFrom(payload){
      this.subscribeFrom = payload
  }
  set _subscribeTo(payload){
      this.subscribeTo = payload
  }
  set _vacations(payload){
      this.vacations = payload
  }
  set _itemId(payload){
      this.itemId = payload
  }
  set _subscribeOnWeekend(payload){
      this.subscribedOnWeekend = payload
  }
}