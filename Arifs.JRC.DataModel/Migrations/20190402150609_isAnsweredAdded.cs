using Microsoft.EntityFrameworkCore.Migrations;

namespace Arifs.JRC.DataModel.Migrations
{
    public partial class isAnsweredAdded : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "IsAnswered",
                table: "Fatawas",
                nullable: false,
                defaultValue: false);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "IsAnswered",
                table: "Fatawas");
        }
    }
}
