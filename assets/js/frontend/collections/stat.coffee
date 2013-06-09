define [
  'chaplin',
  'collections/base/collection'
  'models/stat'
], (Chaplin, Collection, Stat) ->
  'use strict'

  class StatCollection extends Collection

    model: Stat
    stat: 'analytics'

    url: ->
      return "/api/stats/#{@club}/#{@stat}"

    initialize: (options) ->
      @club = options.club
      @stat = options.stat if !!options.stat
      super

    spreadDates: (dates) ->
      oneDay = 24*60*60*1000
      first = new Date dates[0]
      last = new Date dates[dates.length - 1]
      spreadDays = ((Math.round(Math.abs(first.getTime() - last.getTime())) / oneDay) / dates.length)
      newDates = [first]

      for d, index in dates.slice(1)
        date = new Date(first)
        date.setHours(first.getHours() + ((index + 1) * (spreadDays * 24)))
        newDates.push date

      return newDates

    generateLineChart: (container, stat) ->
      obj = {}
      obj.element = container
      dates = @spreadDates @pluck('date')
      data =  @map (val, index) ->
        temp = {}
        temp[stat] = val.get(stat).toFixed(2)
        temp['date'] = dates[index].toISOString()
        return temp

      obj.data = data
      obj.ykeys = [stat]
      obj.xkey = 'date'
      obj.labels = [stat]
      return obj

    generateDonutChart: (container, stats) ->
      obj = {}
      obj.element = container
      obj.data = []
      _.each stats, (stat) =>
        vals = @pluck(stat)
        avg = _.reduce(vals, ((memo, num) -> return memo + num), 0) / vals.length
        obj.data.push
          label: stat
          value: avg.toFixed(2)

      return obj
