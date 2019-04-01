using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Arifs.JRC.DataModel.Migrations
{
    public partial class addedFatawaAnswerEntity : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "FatawaAnswers",
                columns: table => new
                {
                    Id = table.Column<string>(nullable: false),
                    CreatedBy = table.Column<string>(nullable: true),
                    Created = table.Column<DateTime>(nullable: false),
                    QuestionNo = table.Column<string>(nullable: true),
                    Questioner = table.Column<string>(nullable: true),
                    Address = table.Column<string>(nullable: true),
                    Question = table.Column<string>(nullable: true),
                    Answer = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_FatawaAnswers", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "FatawaAnswers");
        }
    }
}
