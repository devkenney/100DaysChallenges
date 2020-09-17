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

(1..4).each do
  (2..9).each do |num|
    deck.append(Card.new num)
  end
  (1..3).each do
    deck.append(Card.new 10)
  end
  deck.append(Card.new 11)
end

