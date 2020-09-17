deck = []

class Player

  def initialize name
    @name = name
    @bankroll = 100
    @hand = []
  end
end

class House

  def initialize name
    @name = name
    @bankroll = 10000
    @hand = []
  end
end

class Card

  def initialize value
    @value = value
  end
end

