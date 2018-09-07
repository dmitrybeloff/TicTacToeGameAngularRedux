using System;
using System.Linq;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using SnakeGame.BLL.Enum;
using SnakeGame.BLL.Models;
using SnakeGame.BLL.Services;

namespace SnakeGame.BLL.Tests
{
    [TestClass]
    public class GameServiceUnitTest
    {
        [TestMethod]
        public void PlayerChangeTest()
        {
            GameService gameService = new GameService();

            var p1 = new TicaTacToeUserModel { Id = Guid.NewGuid().ToString() };
            var p2 = new TicaTacToeUserModel { Id = Guid.NewGuid().ToString() };

            GameModel gameModel = new GameModel(p1, p2);

            var previousId = gameModel.CurrentId;

            gameService.MakeMove(ref gameModel, gameModel.CurrentId, 0, out string gameMessage);

            Assert.AreNotEqual(previousId, gameModel.CurrentId);
        }

        [TestMethod]
        public void TestErrorResult()
        {
            GameService gameService = new GameService();

            var p1 = new TicaTacToeUserModel { Id = Guid.NewGuid().ToString() };
            var p2 = new TicaTacToeUserModel { Id = Guid.NewGuid().ToString() };

            GameModel gameModel = new GameModel(p1, p2);

            gameService.MakeMove(ref gameModel, gameModel.CurrentId, 0, out string gameMessage);

            var result = gameService.MakeMove(ref gameModel, gameModel.CurrentId, 0, out gameMessage);

            Assert.AreEqual(result, GameMoveResults.Error);
        }

        [TestMethod]
        public void TestErrorResultMessage()
        {
            GameService gameService = new GameService();

            var p1 = new TicaTacToeUserModel { Id = Guid.NewGuid().ToString() };
            var p2 = new TicaTacToeUserModel { Id = Guid.NewGuid().ToString() };

            GameModel gameModel = new GameModel(p1, p2);

            gameService.MakeMove(ref gameModel, gameModel.CurrentId, 0, out string gameMessage);

            var result = gameService.MakeMove(ref gameModel, gameModel.CurrentId, 0, out gameMessage);

            Assert.AreEqual(gameMessage.Contains("Ошибка"), true);
        }

        [TestMethod]
        public void TestDrawResult()
        {
            GameService gameService = new GameService();

            var p1 = new TicaTacToeUserModel { Id = Guid.NewGuid().ToString() };
            var p2 = new TicaTacToeUserModel { Id = Guid.NewGuid().ToString() };

            GameModel gameModel = new GameModel(p1, p2);

            gameService.MakeMove(ref gameModel, gameModel.CurrentId, 0, out string gameMessage);
            gameService.MakeMove(ref gameModel, gameModel.CurrentId, 1, out gameMessage);
            gameService.MakeMove(ref gameModel, gameModel.CurrentId, 2, out gameMessage);
            gameService.MakeMove(ref gameModel, gameModel.CurrentId, 3, out gameMessage);
            gameService.MakeMove(ref gameModel, gameModel.CurrentId, 4, out gameMessage);
            gameService.MakeMove(ref gameModel, gameModel.CurrentId, 6, out gameMessage);
            gameService.MakeMove(ref gameModel, gameModel.CurrentId, 5, out gameMessage);
            gameService.MakeMove(ref gameModel, gameModel.CurrentId, 8, out gameMessage);
            var result = gameService.MakeMove(ref gameModel, gameModel.CurrentId, 7, out gameMessage);

            Assert.AreEqual(result, GameMoveResults.Draw);
        }

        [TestMethod]
        public void GameLogicRowTest()
        {
            GameService gameService = new GameService();

            var p1 = new TicaTacToeUserModel { Id = Guid.NewGuid().ToString(), Username = "p1" };
            var p2 = new TicaTacToeUserModel { Id = Guid.NewGuid().ToString(), Username = "p2" };

            GameModel gameModel = new GameModel(p1, p2);

            string gameMessage = string.Empty;

            var winnerUsername = gameModel.CurrentUsername;            

            for (var i = 0; i < 9; i+=3)
            {
                GameMoveResults result = GameMoveResults.Continue;
                int counter = 0;
                int tmp = i < 6 ? i + 3 : i - 6;
                for (var j = 0; j < i+3; j ++)
                {
                    counter++;
                    result = gameService.MakeMove(ref gameModel, gameModel.CurrentId, i + j, out gameMessage);
                    if (counter == 3)
                        break;
                    gameService.MakeMove(ref gameModel, gameModel.CurrentId, tmp + j, out gameMessage);
                }

                Assert.AreEqual(result, GameMoveResults.EndGame);

                gameModel = new GameModel(p1, p2);
                winnerUsername = gameModel.CurrentUsername;
            }
        }

        [TestMethod]
        public void GameLogicColumnTest()
        {
            GameService gameService = new GameService();

            var p1 = new TicaTacToeUserModel { Id = Guid.NewGuid().ToString(), Username = "p1" };
            var p2 = new TicaTacToeUserModel { Id = Guid.NewGuid().ToString(), Username = "p2" };

            GameModel gameModel = new GameModel(p1, p2);

            string gameMessage = string.Empty;

            var winnerUsername = gameModel.CurrentUsername;

            for (var i = 0; i < 3; i++)
            {
                GameMoveResults result = GameMoveResults.Continue;
                int counter = 0;
                int tmp = i < 2 ? i + 1 : i - 2;
                for (var j = 0; j < 9; j += 3)
                {
                    result = gameService.MakeMove(ref gameModel, gameModel.CurrentId, i + j, out gameMessage);
                    if (counter == 3)
                        break;
                    gameService.MakeMove(ref gameModel, gameModel.CurrentId, tmp + j, out gameMessage);
                }

                Assert.AreEqual(result, GameMoveResults.EndGame);

                gameModel = new GameModel(p1, p2);
                winnerUsername = gameModel.CurrentUsername;
            }
        }

        [TestMethod]
        public void GameLogicX1Test()
        {
            GameService gameService = new GameService();

            var p1 = new TicaTacToeUserModel { Id = Guid.NewGuid().ToString(), Username = "p1" };
            var p2 = new TicaTacToeUserModel { Id = Guid.NewGuid().ToString(), Username = "p2" };

            GameModel gameModel = new GameModel(p1, p2);

            string gameMessage = string.Empty;

            var winnerUsername = gameModel.CurrentUsername;

            gameService.MakeMove(ref gameModel, gameModel.CurrentId, 0, out gameMessage);
            gameService.MakeMove(ref gameModel, gameModel.CurrentId, 1, out gameMessage);
            gameService.MakeMove(ref gameModel, gameModel.CurrentId, 4, out gameMessage);
            gameService.MakeMove(ref gameModel, gameModel.CurrentId, 2, out gameMessage);
            var result = gameService.MakeMove(ref gameModel, gameModel.CurrentId, 8, out gameMessage);

            Assert.AreEqual(result, GameMoveResults.EndGame);
        }

        [TestMethod]
        public void GameLogicX2Test()
        {
            GameService gameService = new GameService();

            var p1 = new TicaTacToeUserModel { Id = Guid.NewGuid().ToString(), Username = "p1" };
            var p2 = new TicaTacToeUserModel { Id = Guid.NewGuid().ToString(), Username = "p2" };

            GameModel gameModel = new GameModel(p1, p2);

            string gameMessage = string.Empty;

            var winnerUsername = gameModel.CurrentUsername;

            gameService.MakeMove(ref gameModel, gameModel.CurrentId, 2, out gameMessage);
            gameService.MakeMove(ref gameModel, gameModel.CurrentId, 0, out gameMessage);
            gameService.MakeMove(ref gameModel, gameModel.CurrentId, 4, out gameMessage);
            gameService.MakeMove(ref gameModel, gameModel.CurrentId, 1, out gameMessage);
            var result = gameService.MakeMove(ref gameModel, gameModel.CurrentId, 6, out gameMessage);

            Assert.AreEqual(result, GameMoveResults.EndGame);
        }
    }
}
